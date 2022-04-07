import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "text" })
  price!: any;

  @Column({ type: "timestamp", nullable: true, default: null })
  createdAt!: Date;

  @Column({ type: "timestamp", nullable: true, default: null })
  deletedAt!: Date;
}
