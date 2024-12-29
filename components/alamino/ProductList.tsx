import { View, Text } from 'react-native'
import React from 'react'
import { Product } from './Home';

interface ProductListProps {

  products: Product[];

}

const ProductList: React.FC<ProductListProps> = ({products}) => {
  return (
    <View>

      <Text>Product List</Text>

      {products.map((product, index) => (

        <View key={index}>

          <Text>{product.name}</Text>

          <Text>{product.description}</Text>

          <Text>{product.price}</Text>

          <Text>{product.quantity}</Text>

        </View>

      ))}

    </View>
  )
}

export default ProductList