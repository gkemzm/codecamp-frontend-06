import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class fetchProducts {
  @PrimaryGeneratedColumn("uuid") // 중복되지않은 자동으로 증가하는 컬럼 ("uuid") <- 사용시 중복 되지 않은 id자동생성
  _id!: string;

  @Column({ type: "text" })
  seller!: string;

  @Column({ type: "text" })
  name!: string;

  @Column({ type: "text" })
  detail!: string;

  @Column({ type: "number" })
  price!: number;
}
