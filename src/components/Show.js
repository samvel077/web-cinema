import React, { useEffect } from "react";
import { useParams } from "react-router";
import { connect } from "react-redux";
import { getShow } from "../redux/action";
import "./Show.css";

const Show = ({ getShow, show }) => {
  let id = useParams();

  useEffect(() => {
    getShow(id);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="conteiner d-flex align-items-center justify-content-center">
      <div class="movie-card">
        <div
          class="movie-header manOfSteel"
          style={{ backgroundImage: `url(${show?.image?.original})` }}
        >
          <div class="header-icon-container"></div>
        </div>
        <div class="movie-content">
          <div class="movie-content-header">
            <h3 class="movie-title">{show?.name}</h3>
            <div class="imax-logo">{show?.network?.name}</div>
          </div>
          <div class="movie-info">
            <div class="info-section">
              <label>Premiered</label>
              <span>{show?.premiered}</span>
            </div>
            <div class="info-section">
              <label>Language</label>
              <span>{show?.language}</span>
            </div>
            <div class="info-section">
              <label>Status</label>
              <span>{show?.status}</span>
            </div>
            <div class="info-section">
              <label>Seat</label>
              <span>21,22</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  show: state.show,
});

const mapDispatchToProps = {
  getShow,
};

export default connect(mapStateToProps, mapDispatchToProps)(Show);
