import $ from 'jquery';

class ReviewPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_name: '',
      product_id: '',
      review_date: '',
      header: '',
      review_text: '',
      rating: '',
      would_recommend: ''
    }
    // this.handleLoad = this.handleLoad.bind(this);
  }

  componentDidMount() {
    $.ajax({
      url: 'http://localhost:3030/product/reviews',
      type: 'GET',
      dataType: 'json',
      success: (data) => {
        data.forEach((entry) => {
          if (entry.product_id === 4) {
            console.log(entry);
          }
        })
      }
    })
  }
  

  render() {
    return (
      <div> hey hey ya'll </div>
    )
  }
}

export default ReviewPage;