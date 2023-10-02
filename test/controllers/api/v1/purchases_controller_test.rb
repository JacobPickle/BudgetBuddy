require "test_helper"

class Api::V1::PurchasesControllerTest < ActionDispatch::IntegrationTest
  setup do 
    @storeHyvee = Store.create({name:"Hyvee"})

    @purchase = Purchase.create({purchase_date:Date.current, total:5.99, store:@storeHyvee})
  end

  test "should get index" do
    get api_v1_purchases_index_url
    assert_response :success
  end

  test "should get create" do
    post api_v1_purchases_create_url, params: {purchase_date:Date.current, total:2.79, store_id:@storeHyvee.id}
    assert_response :success
  end

  test "should get show" do
    get "/api/v1/purchases/show/#{@purchase.id}"
    purchase = @response.parsed_body
    assert_equal 5.99, purchase['total']
    assert Date.current == Date.parse(purchase['purchase_date'])
    assert_response :success
  end

  test "should get destroy" do
    delete "/api/v1/purchases/destroy/#{@purchase.id}"
    assert_response :success
  end
end
