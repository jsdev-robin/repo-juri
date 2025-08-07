# ❗ Module Import Issue in Nx Monorepo

I'm encountering an issue in my Nx monorepo when trying to import a local library.

---

## ❌ Error

```
Cannot find module '@juri/my-lib' or its corresponding type declarations.ts(2307)
```

---

## 📂 Project Structure

```
apps/
  gateway/
    src/
      main.ts  <-- Importing from '@juri/my-lib' here

libs/
  my-lib/
    src/
      lib/
        my-lib.ts
    src/
      index.ts  <-- Exporting from here

tsconfig.base.json
```

---

## 📦 Import Code (in `apps/gateway/src/main.ts`)

```ts
import { myLib } from '@juri/my-lib';

console.log(myLib());
```

---

## 🛠️ Expectation

I want to be able to import `myLib` from `@juri/my-lib` across my apps without type/module errors.

---

## 💬 Additional Notes

Let me know if you need:

- My full `tsconfig.base.json`
- My `nx.json` or `project.json` setup
- Any extra logs

Thanks in advance 🙏
