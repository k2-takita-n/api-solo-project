
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Ski } from "./SkiModel";

@Entity()
export class Maker {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public MakerName: string;

    @Column()
    public Detail: string;

    @OneToMany((type)=>Ski, (ski) => ski.Maker)
    public skis: Ski[];

}
