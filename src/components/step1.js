import React, { Component } from 'react';
import './step1.css';
import './step_shared.css';

//code inspired from https://codepen.io/mtclmn/pen/QyPVJp?editors=1010

class List extends Component {

  constructor(props) {
    super(props);
    this.clicked = this.clicked.bind(this);

  }

 clicked(item) {
   this.props.addToCart(item);
 }

  render() {

    var clickHandler = this.clicked.bind(this);

    return (
      <ul class='list-container'>
      {
        this.props.items.map(function(item) {
          return <li className="list-item" data-category={item} key={item}>
                  <div class='company-name'>{item}</div>
                  <button class='cart-button' onClick={() => clickHandler(item)}>Add to cart</button>
                 </li>
        })
       }
      </ul>
    )
  }
}

class Step1 extends Component {

  constructor(props) {
    super(props);
    this.state=  {
        items : [ "Branch Metrics",
        "Kidaptive",
        "Farmer Analytics",
        "Spire",
        "Samsara",
        "Qualtrics",
        "Tinker",
        "CareDash",
        "500px",
        "affirm",
        "53",
        "Glow",
        "Groupon",
        "Magic Leap",
        "Rigetti",
        "Soylent",
        "Within"],
        searchedItems : [],
        selectedItems: []
     };

     this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    var selected = this.state.selectedItems;
    selected.push(item);
    this.setState({selectedItems:selected});
  }

  search(event) {
    var currentList = this.state.items,
        newList = [],
        searchVal = event.target.value,
        i;

    /*
    for (i = 0; i < currentList.length; i++) {
      if(currentList[i].includes(searchVal)) {
        newList.push(currentList[i]);
      }

      this.setState({items : newList});
    }
    */
    currentList = currentList.filter(function(item){
      return item.toLowerCase().search(
        event.target.value.toLowerCase()) !== -1;
    });

    this.setState({items: currentList});
  }

  render() {
    return (
      <div class='box'>
        <div class='step-header'>
          <div class='step_number'>1</div>
          <div class='step_description_component'>Step 1: Find companies.</div>
        </div>
        <div class='step1_body'>
          <form>
            <p class='text-style'></p>
            <label class='text-style'>
              <input class='search' type="text" name="name" placeholder="Magic Leap" onChange={this.search.bind(this)}/>
            </label>
          </form>
          <div class='search-results'>
            <p class='text-style' id='text-style-black'>Results</p>
            <List items={this.state.items}  addToCart={this.addToCart.bind(this)}/>
            {alert(this.state.selectedItems)}
          </div>
        </div>
      </div>
    );
  }
}
export default Step1;
