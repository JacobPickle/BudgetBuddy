require "test_helper"

class Api::V1::ItemsControllerTest < ActionDispatch::IntegrationTest
  setup do 
    @storeHyvee = Store.create({name:"Hyvee"})

    @purchase = Purchase.create({purchase_date:Date.current, total:5.99, store:@storeHyvee})

    @item = Item.create({name:"hotdogs", price:2.99, purchase:@purchase})
  end

  test "should get index" do
    get api_v1_items_index_url
    assert_response :success
  end

  test "should get create" do
    post api_v1_items_create_url, params: {name: "testName", price: 1.67, purchase_id: @purchase.id}
    assert_response :success
  end

  test "should get show" do
    get "/api/v1/items/show/#{@item.id}"
    item = @response.parsed_body
    assert_equal 2.99, item['price']
    assert_equal "hotdogs", item['name']
    assert_response :success
  end

  test "should get show by purchase id" do
    get "/api/v1/items/show_by_purchase/#{@purchase.id}"
    item = @response.parsed_body
    assert_equal 2.99, item[0]['price']
    assert_equal "hotdogs", item[0]['name']
    assert_response :success
  end

  test "should delete destroy" do
    delete "/api/v1/items/destroy/#{@item.id}"
    assert_response :success
  end
end
