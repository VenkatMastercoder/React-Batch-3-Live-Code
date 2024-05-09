import { useRouteError } from "react-router-dom"


const ErrorPage = () => {

  const error = useRouteError()
  console.log(error)

  return (
    <>
    <div>ErrorPage</div>
    <p>{error.status}</p>
    <p>{error.statusText}</p>
    </>
  )
}

export default ErrorPage