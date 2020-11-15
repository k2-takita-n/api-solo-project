import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { Maker } from "./MakerModel";


@Entity()
export class Ski {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    public Name: string;

    @Column({ nullable: true })
    public Detail: string;

    @Column({ nullable: true })
    public makerId: number;
}
