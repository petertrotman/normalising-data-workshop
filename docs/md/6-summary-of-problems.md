## Summary

- Reading from nested data object is very easy
- Updating a nested data object is very easy <!-- .element: class="fragment" -->
  - ... but only if it is not duplicated
  - ... and only if you do it in-place
- Updating a nested data object where there is duplicate information is inefficient and error-prone <!-- .element: class="fragment" -->
  - This results in unreusable data transformation functions (e.g. changeUserInfo)
- Updating a nested data object immutably where there is duplicate information is very difficult <!-- .element: class="fragment" -->
  - This requires a *change in the conditions of the test*
