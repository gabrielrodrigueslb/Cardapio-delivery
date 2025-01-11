

export function ItemMenu(props){
    return(
        <>
         <div className="card mb-2 item-cardapio">
            <div className="d-flex">
              <div
                className="container-img-produto"
                // style="background-image: url('./img/calabresa.jpg'); background-size: cover;"
              >
                <img src={props.url} alt={props.name} />
              </div>

              <div className="infos-produto">
                <p className="name">
                  <b>{props.name}</b>
                </p>
                <p className="description">
                  {props.description}
                </p>
                <p className="price">
                  <b>{props.price}</b>
                </p>
              </div>
            </div>
          </div>
        </>
    )
}