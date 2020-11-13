
import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Maker } from "./MakerModel";


@Entity()
export class Ski {

    @PrimaryGeneratedColumn("uuid")
    public id: string;

    @Column()
    public Name: string;

    @Column()
    public Detail: string;

    @ManyToOne((type)=>Maker, (maker) => maker.id)
    public Maker: Maker;
}
