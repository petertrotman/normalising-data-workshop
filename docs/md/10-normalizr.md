## Normalizr

- How do we get to the normalised structure?
- Each data source needs to have its own normalising data transform <!-- .element: class="fragment" -->
- Also need a denormalisation data transform to communicate back with the API <!-- .element: class="fragment" -->
- npm install --save normalizr <!-- .element: class="fragment" -->
  - You define the `schema` for the format of the JSON from your API
  - normalizr creates the `normalize` and `denormalize` functions for you
