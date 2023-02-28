import { Config } from '../custom-types/server';
require('dotenv').config();

export const config: Config = {
  PORT: process.env.PORT,
};
