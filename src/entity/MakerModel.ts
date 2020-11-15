import { Entity, OneToMany, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, PrimaryColumn } from "typeorm";
import { Ski } from "./SkiModel";

@Entity()
export class Maker {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true })
    public MakerName: string;

    @Column({ nullable: true })
    public Detail: string;
}
