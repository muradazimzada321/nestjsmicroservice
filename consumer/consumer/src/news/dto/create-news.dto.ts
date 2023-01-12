/* eslint-disable prettier/prettier */
export class CreateNewsDto {
  constructor(heading: string, context: string) {
    // eslint-disable-next-line prettier/prettier
    this.heading = heading;
    this.context = context;
  }
  heading: string;
  context: string;
}
