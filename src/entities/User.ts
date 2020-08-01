import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  avatar: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  // @Expose({ name: 'avatar_url' })
  // getAvatarUrl(): string | null {
  //   if (!this.avatar) {
  //     return null;
  //   }
  //   switch (uploadConfig.driver) {
  //     case 'diskStorage':
  //       return `${process.env.APP_API_URL}/files/${this.avatar}`;

  //     case 's3':
  //       return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`;

  //     default:
  //       return null;
  //   }
  // }
}

export default User;
