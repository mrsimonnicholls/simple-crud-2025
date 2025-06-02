# simple-crud-2025

A minimal vanilla JavaScript CRUD app using [Supabase](https://supabase.com/) and modular JS files. Includes `create`, `read`, `update`, and `delete` functionality using the browser and ES modules.

---

## Folder Structure

```text

/simple-crud-2025
  ├── index.html
  ├── create.html
  ├── update.html
  ├── admin.html
  └── src/
      ├── connection.js
      ├── create.js
      ├── update.js
      ├── admin.js
      └── styles.css
```

## Setup

1. Clone the repo or download the files.

2. Create a `src/connection.js` file:

```js

// connection.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = '<your URL>'
const supabaseKey = '<your KEY>'

export const supabase = createClient(supabaseUrl, supabaseKey)
```
