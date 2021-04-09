import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { deleteShow, getGenres, deleteGenre } from "../redux/action";
import StarRating from "../components/StarRating";
import { Link } from "react-router-dom";

const MoveList = ({
  shows,
  rating,
  showName,
  deleteShow,
  genres,
  getGenres,
  deleteGenre,
}) => {
  const [collapse, setCollapse] = useState({
    type: [],
  });

  useEffect(() => {
    getGenres();
    // eslint-disable-next-line
  }, [shows]);

  return (
    <div className="page-hero d-flex align-items-center justify-content-center">
      <div className="mt-5 pt-5 w-50">
        <div className="accordion" id="accordionExample">
          <div className="card">
            {genres.map((item, index) => (
              <>
                <div
                  className="card-header page-hero d-flex align-items-center justify-content-between"
                  id="headingOne"
                  key={index}
                >
                  <h2 className="mb-0">
                    <button
                      className="btn btn-link"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      onClick={() => {
                        setCollapse({
                          type: [...collapse.type, item],
                        });
                      }}
                    >
                      {item}
                    </button>
                  </h2>
                  <div className="page-hero d-flex justify-content-between align-items-center">
                    <button
                      type="button"
                      className="btn btn-info me-3"
                      onClick={() => deleteGenre(item)}
                    >
                      Delete Genre
                    </button>
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        setCollapse({
                          type: collapse.type.filter((e) => e !== item),
                        });
                      }}
                    >
                      X
                    </button>
                  </div>
                </div>
                {shows.map((elem, id) => (
                  <div
                    id="collapseOne"
                    className={`collapse ${
                      collapse.type.includes(item) ? "show" : "hide"
                    } ${
                      !rating && showName.includes(elem.show.name)
                        ? "bg-info"
                        : rating && showName.includes(elem.show.name)
                        ? "bg-info"
                        : "bg-light"
                    }`}
                    aria-labelledby="headingOne"
                    data-parent="#accordionExample"
                    key={id}
                  >
                    {(!elem.show.genres.length ||
                      elem.show.genres.includes(item)) && (
                      <div
                        className={`card-body page-hero d-flex align-items-center justify-content-between`}
                      >
                        <Link
                          style={{ textDecoration: "none" }}
                          to={`/show/${elem.show.id}`}
                        >
                          {elem.show.name}
                        </Link>
                        <div
                          className="page-hero d-flex justify-content-around align-items-center"
                          style={{ width: "35%" }}
                        >
                          <span className="fs-4">
                            Score: {Math.floor(elem.score)}
                          </span>
                          <StarRating showName={elem.show.name} />
                          <button
                            type="button"
                            className="btn btn-outline-danger"
                            onClick={() => {
                              deleteShow(elem.show.id);
                            }}
                          >
                            Delete Show
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shows: state.shows,
  rating: state.rating,
  showName: state.showName,
  genres: state.genres,
});

const mapDispatchToProps = {
  deleteShow,
  getGenres,
  deleteGenre,
};

export default connect(mapStateToProps, mapDispatchToProps)(MoveList);
