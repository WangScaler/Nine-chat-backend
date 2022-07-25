import { Column, Entity } from 'typeorm';
import { BaseEntity } from 'src/common/entity/baseEntity';

@Entity({ name: 'tb_music' })
export class MusicEntity extends BaseEntity {
  @Column({ length: 300, comment: "歌曲专辑"})
  music_album: string;

  @Column({ length: 300, comment: "歌曲名称"})
  music_name: string;

  @Column({ unique: true, comment: "歌曲mid" })
  music_mid: number;

  @Column({ comment: "歌曲时长" })
  music_duration: number;

  @Column({ length: 300, comment: "歌曲作者",default: "wangscaler" })
  music_singer: string;

  @Column({ comment:"是否推荐到热门歌曲 1:是 -1:不是", default: -1})
  is_recommend: number;

  @Column({ length: 255, comment: "歌曲封面图",default: "https://blog.wangscaler.com/back.jpg" })
  music_pic120: string;
}
