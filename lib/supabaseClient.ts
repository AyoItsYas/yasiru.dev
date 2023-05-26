import { createClient } from '@supabase/supabase-js';
import 'dotenv/config';

const ENV = process.env;
const { SUPABASE_URL, SUPABASE_KEY } = ENV;

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);
