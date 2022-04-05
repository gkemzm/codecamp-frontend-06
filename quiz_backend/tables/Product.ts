import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class fetchProduct {
  @PrimaryGeneratedColumn("uuid")
  _id!: any;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: any;
}
