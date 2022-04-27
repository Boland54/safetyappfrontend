import React, { useState, useEffect } from "react";
import Toast from "./../LoadingError/Toast";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  editProduct,
  updateProduct,
} from "./../../Redux/Actions/ProductActions";
import { PRODUCT_UPDATE_RESET } from "../../Redux/Constants/ProductConstants";
import { toast } from "react-toastify";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";

const ToastObjects = {
  pauseOnFocusLoss: false,
  draggable: false,
  pauseOnHover: false,
  autoClose: 2000,
};

const EditProductMain = (props) => {
  const { productId } = props;

  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [imagerep, setImagerep] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();

  const productEdit = useSelector((state) => state.productEdit);
  const { loading, error, product } = productEdit;

  const productUpdate = useSelector((state) => state.productUpdate);
  const {
    loading: loadingUpdate,
    error: errorUpdate,
    success: successUpdate,
  } = productUpdate;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: PRODUCT_UPDATE_RESET });
      toast.success("Product Updated", ToastObjects);
    } else {
      if (!product.description || product._id !== productId) {
        dispatch(editProduct(productId));
      } else {
        setDescription(product.description);
        setLatitude(product.latitude);
        setLongitude(product.longitude);
        setImagerep(product.imagerep);
      }
    }
  }, [product, dispatch, productId, successUpdate]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      updateProduct({
        _id: productId,
        description,
        latitude,
        longitude,
        imagerep,
      })
    );
  };

  return (
    <>
      <Toast />
      <section className="content-main" style={{ maxWidth: "1200px" }}>
        <form onSubmit={submitHandler}>
          <div className="content-header">
            <Link to="/products" className="btn btn-danger text-white">
              Go to reports
            </Link>
            <h2 className="content-title">Update Product</h2>
            <div>
              <button type="submit" className="btn btn-primary">
                Update now
              </button>
            </div>
          </div>

          <div className="row mb-4">
            <div className="col-xl-8 col-lg-8">
              <div className="card mb-4 shadow-sm">
                <div className="card-body">
                  {errorUpdate && (
                    <Message variant="alert-danger">{errorUpdate}</Message>
                  )}
                  {loadingUpdate && <Loading />}
                  {loading ? (
                    <Loading />
                  ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
                  ) : (
                    <>
                      <div className="mb-4">
                      <label htmlFor="product_title" className="form-label">
                      Description
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_description"
                      required
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_latitude" className="form-label">
                      Latitude
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_latitude"
                      required
                      value={latitude}
                      onChange={(e) => setLatitude(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="product_longitude" className="form-label">
                      Longitude
                    </label>
                    <input
                      type="text"
                      placeholder="Type here"
                      className="form-control"
                      id="product_longitude"
                      required
                      value={longitude}
                      onChange={(e) => setLongitude(e.target.value)}
                    />
                  </div>
                  <div className="mb-4">
                    <label className="form-label">Images</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Enter Image URL"
                      value={imagerep}
                      onChange={(e) => setImagerep(e.target.value)}
                    />
                    <input className="form-control mt-3" type="file" />
                  </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </section>
    </>
  );
};

export default EditProductMain;
