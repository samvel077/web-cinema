import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getShowList, showLoading } from "../redux/action";
import { Loading } from "../components/Loading";

const Serch = ({ getShowList, loading }) => {
  const [value, setValue] = useState("");

  // //Call with nothing
  // useEffect(() => {
  //   getShowList(value);
  //   // eslint-disable-next-line
  // }, [value]);

  //Call with debounce
  useEffect(() => {
    const handler = setTimeout(() => getShowList(value), 500);
    return () => clearTimeout(handler);
    //eslint-disable-next-line
  }, [value]);

  // //Call on button click
  // function callOnClick() {
  //   getShowList(value);
  // }

  // //Call on enter input
  // const handleOnKeyDown = (event) => {
  //   if (event.key === "Enter") {
  //     event.preventDefault();
  //     getShowList(value);
  //   }
  // };

  return (
    <>
      <div className="position-absolute top-0 start-50 translate-middle-x pt-3">
        <div className="input-group">
          <input
            type="search"
            className="form-control rounded"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
            onChange={(e) => setValue(e.target.value)}
            // onKeyDown={handleOnKeyDown}
          />
          <button
            type="button"
            className="btn btn-outline-primary"
            // onClick={callOnClick}
          >
            search
          </button>

          {loading && <Loading />}
        </div>
      </div>
    </>
  );
};

const mapDispatchToProps = {
  getShowList,
  showLoading,
};

const mapStateToProps = (state) => ({
  loading: state.loading,
});

export default connect(mapStateToProps, mapDispatchToProps)(Serch);
