import header from "../data/header"

function CustomerService() {

    const data = header.map(element => {
        return (
            <div className="d-flex mx-5 my-4">
                <div className="m-1">
                    {element.paragraph}
                </div>
                <div className="m-1">
                    {element.number}
                </div>
            </div>
        )
    })
    return (
        <div>
            {data}
        </div>
    )
}
export default CustomerService