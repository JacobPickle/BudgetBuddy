require "test_helper"

class Api::V1::StoresControllerTest < ActionDispatch::IntegrationTest
  setup do 
    @storeHyvee = Store.create({name:"Hyvee"})
  end

  test "should get index" do
    get api_v1_stores_index_url
    assert_response :success
  end

  test "should get create" do
    post api_v1_stores_create_url, params: {name: "Aldi"}
    assert_response :success
  end

  test "should get show" do
    get "/api/v1/stores/show/#{@storeHyvee.id}"
    store = @response.parsed_body
    assert_equal "Hyvee", store['name']
    assert_response :success
  end

  test "should get destroy" do
    delete "/api/v1/stores/destroy/#{@storeHyvee.id}"
    assert_response :success
  end
end
