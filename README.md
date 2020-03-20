# Web Dev Tricks

## PROBLEMS AND SOLUTIONS

### You might have more than one copy of React in the same app

In this case one React copy from the main app and one from the linked library (through `npm-link`) e.g `cb-hooks`

#### Solution

1. Install `npm-link-shared`

```bash
yarn add -D npm-link-shared
```

1. Add `prestart` script:

```json
{
  "scripts": {
    "prestart": "npm-link-shared ./node_modules/cb-hooks/node_modules . react"
  }
}
```

#### References

1. [Invalid Hook Call Warning](https://reactjs.org/warnings/invalid-hook-call-warning.html)

1. [Hooks + multiple instances of React](https://github.com/facebook/react/issues/13991#issuecomment-435343455)
