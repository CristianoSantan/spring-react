import React from "react";

export default function Card(props) {
  return (
    
      <div className="card m-3" style={{ maxWidth: "500px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://images-na.ssl-images-amazon.com/images/I/81ibfYk4qmL.jpg"
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{props.title}</h5>
              <p className="card-text mb-0">
                {props.descricao}
              </p>
              <p className="card-text mb-0">
                <small className="text-muted">
                  <s>{props.precoOld}</s>
                </small>
              </p>
              <p className="card-text">{props.precoNew}</p>
            </div>
          </div>
        </div>
      </div>
  );
}
