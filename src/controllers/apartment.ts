import { Apartment } from "../models/apartment";
import { ApartmentRequestBody, UserRequest } from "../interfaces/requests";
import { HttpStatusCodes } from "../utils/http-status-codes";
import { Request, Response } from "express";
import { Room } from "../models/room";
import { ResponseApartment } from "../interfaces/responses";
import { ImagesForApartments } from "../models/images-for-apartments";

export const createApartment = async (req: UserRequest, res: Response) => {
  try {
    const apartmentData: ApartmentRequestBody = req.body;
    //create the apartment in the db
    const apartment = await Apartment.create({
      name: apartmentData.name,
      settlementId: apartmentData.settlementId,
      address: apartmentData.address,
      area: apartmentData.area,
      type: apartmentData.type,
      creator: req.user_id,
      status: 1,
    });
    //create the rooms for the apartment in the db
    for (let i = 0; i < apartmentData.rooms.length; i++) {
      const room = await Room.create({
        type: apartmentData.rooms[i].type,
        apartmentId: apartment.id,
      });
    }
    //create the images for apartments
    for (let i = 0; i < apartmentData.images.length; i++) {
      const imagesForApartment = await ImagesForApartments.create({
        apartmentId: apartment.id,
        imageId: apartmentData.images[i],
      });
    }
    const responseApartment: ResponseApartment =
      await apartment.getResponseApartment();
    res.status(HttpStatusCodes.CREATED).send(responseApartment);
  } catch (error) {
    console.log(error);
    res.status(HttpStatusCodes.INTERNAL_SERVER_ERROR).send();
  }
};
