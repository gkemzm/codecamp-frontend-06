import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity() //함수 아래는 인자
export class Board extends BaseEntity {
  @PrimaryGeneratedColumn("increment") // 중복되지않은 자동으로 증가하는 컬럼 ("uuid") <- 사용시 중복 되지 않은 id자동생성
  number!: number;

  @Column({ type: "text" })
  writer!: string;

  @Column({ type: "text" })
  title!: string;

  @Column({ type: "text" })
  contents!: string;

  // deletedAt: Date //soft-delete
}
