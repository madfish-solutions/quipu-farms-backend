import { config as configEnv } from 'dotenv';
import path from 'path';

import { logger } from './utils/logger';

logger.info('Applying .env configuration');
configEnv({ path: path.join(__dirname, '../.env') });

const DEFAULT_RPC_URL = 'https://hangzhounet-node.madfish.xyz/';
const DEFAULT_PORT = 3001;

export const RPC_URL = process.env.RPC_URL || DEFAULT_RPC_URL;
export const PORT = Number(process.env.PORT || DEFAULT_PORT);
export const QFARM_ADDRESS = process.env.QFARM_ADDRESS ?? '';
