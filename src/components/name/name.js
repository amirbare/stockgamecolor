import React, { Component } from "react";
import PostData from "../../data/post.json";

var random = Math.floor(Math.random() * 3421) + 1;
var random1 = Math.floor(Math.random() * 3421) + 1;
var random2 = Math.floor(Math.random() * 3421) + 1;
var random3 = Math.floor(Math.random() * 3421) + 1;

var symbol = PostData.filter(function(name) {
  return name.ID === random;
});

var symbol2 = PostData.filter(function(name) {
  return name.ID === random1;
});

var symbol3 = PostData.filter(function(name) {
  return name.ID === random2;
});

var symbol4 = PostData.filter(function(name) {
  return name.ID === random3;
});
console.log(symbol);

class PostList extends Component {
  render() {
    return (
      <>
        <div>
          {symbol.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Symbol}</h1>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </div>

        <div>
          {symbol2.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </div>

        <div>
          {symbol3.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </div>

        <div>
          {symbol4.map((postDetail, index) => {
            return (
              <div>
                <h1>{postDetail.Name}</h1>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default PostList;
