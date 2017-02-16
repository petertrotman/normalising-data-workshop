## Normalizr

- Standardised data format after normalising, but how to get there?
- Can have standard data transforms, but each data source needs to have its own normalising data transform <!-- .element: class="fragment" -->
- Also need a denormalisation data transform to communicate back with the API <!-- .element: class="fragment" -->
- npm install --save normalizr <!-- .element: class="fragment" -->
  - Define the `schema` for the format of the JSON from your API
  - Creates the `normalize` and `denormalize` functions for you
