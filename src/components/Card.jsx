import React from "react";

function Card({ title, description, author }) {
  return (
    <div className="col" title={title}>
      <div className="card h-100">
        <svg
          className="bd-placeholder-img card-img-top"
          width="100%"
          height="225"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Placeholder: Thumbnail"
          preserveAspectRatio="xMidYMid slice"
          focusable="false"
        >
          <rect width="100%" height="100%" fill="#55595c"></rect>
        </svg>
        <div className="card-body">
          <p className="card-text fw-bold">{title}</p>
          <p className="card-text">{description}</p>
        </div>
        <div className="card-footer d-flex justify-content-between align-items-center">
          <div className="btn-group">
            <button type="button" className="btn btn-sm btn-outline-success">
              View
            </button>
            <button type="button" className="btn btn-sm btn-outline-secondary">
              Edit
            </button>
            <button type="button" className="btn btn-sm btn-outline-danger">
              Delete
            </button>
          </div>
          <small className="text-body-secondary fw-bold text-capitalize">
            {author?.username}
          </small>
        </div>
      </div>
    </div>
  );
}

export default Card;
