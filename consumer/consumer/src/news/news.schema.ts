/* eslint-disable prettier/prettier */
import { Prop, Schema,SchemaFactory } from '@nestjs/mongoose/dist';
import { HydratedDocument } from 'mongoose';
export type NewsDocument = HydratedDocument<News>;

@Schema({collection: 'News'})
export class News {
  constructor(heading:string, context:string)
  {
    this.context = context;
    this.heading = heading;
  }
  @Prop()
  heading: string;

  @Prop()
  context: string;
}

export const NewsSchema = SchemaFactory.createForClass(News);