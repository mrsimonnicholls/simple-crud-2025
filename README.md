# simple-crud-2025

Make sure to create a src/connections.js 

```js
// connection.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = '<your URL>'
const supabaseKey = '<your KEY>'

export const supabase = createClient(supabaseUrl, supabaseKey)
