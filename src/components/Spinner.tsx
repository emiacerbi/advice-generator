import { Oval } from 'react-loader-spinner'

function Spinner() {
  return (
    <Oval
      height={50}
      width={50}
      color="hsl(150, 100%, 66%)"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#4fa94d"
      strokeWidth={2}
      strokeWidthSecondary={2}
    />
  )
}

export default Spinner
