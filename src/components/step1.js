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
        "Within",
        "Kensho",
        "Medium",
        "Mesosphere",
        '500px',
        'Affirm',
        'Bluebox Security',
        'Buzzfeed',
        'Databricks',
        'Freenome',
        'Kno',
        'Mesosphere',
        'Optimizely',
        'Tanium',
        'Tenfold',
        'Zulily',],
        searchedItems : [],
        selectedItems: []
     };
     this.addToCart = this.addToCart.bind(this);
  }

  addToCart(item) {
    var selected = this.props.cart;
    //check if the bag already has the item
    //avoiding duplicates
    if (selected.indexOf(item) < 0) {
      selected.push(item);
    }
    this.props.addToCart(selected);
    //var bag = this.state.selectedItems;
    //alert(`Your shopping bag has: ${bag}`)
  }

handleFilterInvestor(event) {


  var a16z = ['500px',
            'Affirm',
            'Bluebox Security',
            'Buzzfeed',
            'Databricks',
            'Freenome',
            'Kno',
            'Mesosphere',
            'Optimizely',
            'Tanium',
            'Tenfold',
            'Zulily',
          ];

  var ycomb = [ 'CureSkin',
              'Cashfree',
              'Audm',
              'Advano',
              'Flock',
              'Goosebump',
              'Guggy',
              'Indivio',
              'Nimble',
              'Polly',
              'Pilot',
              'Slik',
              'Beek',
              'Penny',
              'Scribe',
              'Coub',
              'Expo',
              'Lendsnap',
              'Sage',
              'Spotbot'];

  var greylock = [ 'Aurora',
                'BountyJobs',
                'WildTangent',
                'AwakeSecurity',
                'Apptio',
                'Caffeine',
                'Cato Networks',
                'Delphix',
                'Sigma',
                'GoFundMe',
                'HealthHiway',
                'Lightbend',
                'Innovium',
                'PullString',
                'Upserve',
                'Xapo' ];

  var value = event.target.value;

  switch(value) {

    case 'a16z':
      this.setState({items: a16z});
      break;

    case 'ycomb':
      this.setState({items: ycomb});
      break;

    case 'greylock':
      this.setState({items: greylock});
      break;
  }

}


handleFilterIndustry(event) {

  var value = event.target.value;

}

  /*
  a16z(event) {

    alert('hey');

  }

  nea(event) {


  }

  ycombinator(event) {

  }

  greylock(event) {

  }
*/

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
          <div class='step_description_component'>Find companies.</div>
        </div>
        <div class='step1_body'>
            <p class='text-style'></p>
            <div class='step1-filter-container'>
              <input class='search' type="text" name="name" placeholder="Magic Leap" onChange={this.search.bind(this)}/>
              <div class='filter-box'>
                <p class='filter-text'>FILTER BY</p>
                <p class='filter-option'>Investor:</p>
                <select onChange = {this.handleFilterInvestor.bind(this)}>
                  <option value="a16z">A16Z</option>
                  <option value="greylock">Greylock</option>
                  <option value="ycomb">YCombinator</option>
                </select>
                <p class='filter-option'>Industry:</p>
                <select onChange = {this.handleFilterIndustry.bind(this)}>
                  <option value="finance">Finance</option>
                  <option value="bio">Bio</option>
                  <option value="b2b">B2B</option>
                  <option value="health">Health</option>
                </select>
              </div>
            </div>
          <div class='search-results'>
            <p class='text-style' id='text-style-black'>Results</p>
            <List items={this.state.items}  addToCart={this.addToCart.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
export default Step1;
