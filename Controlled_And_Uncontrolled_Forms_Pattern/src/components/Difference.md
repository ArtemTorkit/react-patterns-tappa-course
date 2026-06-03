# Basic form
- on input change theres no react rerenders
- but for focus you still should add refs
- form is simple and probably will not change and be static in the future
- basic form requires small amount of code and it's very readable

# ControlledForm
- on input change formData state changes it causes rerender
- for focus you still need to mix concerns using refs & states
- form can grow easier later without refactoring
- formData state can be a single state, so it's easier to work with when the form is complex

# UncontrolledForm
- on input change theres no react rerenders
- no need to mix concerns with states and refs
- if form would grow further there will be need to refactor for mix concerns, and make it controlled use ref for focus and formData state to handle the state changes, for simplifying the code, so the use case is when you need a simple static form with focus events
- every field should be separate ref and separate line of code, so if the form is complex that would require ridiculous amount of lines of code