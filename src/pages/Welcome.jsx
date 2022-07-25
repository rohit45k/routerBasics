import { Route } from "react-router-dom"

const Welcome = () => {
  return (
    <>
      <h1>Welcome Page</h1>
      <Route path="/welcome/new-user">
        <p>Welcome New User!</p>
      </Route>
    </>
  )
}

export default Welcome