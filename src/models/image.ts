import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/database";
import { ResponseImage } from "../interfaces/responses";
export class Image extends Model { 
    public id!:number;
    public path!:string;
    public deleted!:boolean;
    public uploader!:number
    public getResponseImage =async ():Promise<ResponseImage> => {
        return {
            id:this.id,
            path:this.path
        }
    }
}


Image.init({
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true
    },
    path:{
        type:DataTypes.STRING,
        allowNull:false
    },
    deleted:{
        type:DataTypes.BOOLEAN,
        allowNull:false,
        defaultValue:false
    },
    uploader:{
        type:DataTypes.INTEGER,
        allowNull:false
    }
},{
    sequelize
})