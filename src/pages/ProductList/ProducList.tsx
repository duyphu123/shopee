import { useQuery } from '@tanstack/react-query'
import productApi from 'src/apis/product.api'
import Pagination from 'src/components/Pagination'
import useQueryParams from 'src/hooks/useQueryParams'
import { ProductList, ProductListConfig } from 'src/types/product.type'
import AsideFilter from './AsideFilter'
import Product from './Product'
import SortProductList from './SortProductList'
import useQueryConfig from 'src/hooks/useQueryConfig'
import categoryApi from 'src/apis/category.api'

export default function ProducList() {
  const queryParams = useQueryParams()
  const queryConfig = useQueryConfig()
  const { data : ProductData} = useQuery({
    queryKey: ['product', queryConfig],
    queryFn: () => {
      return productApi.getProducts(queryConfig as ProductListConfig)
    },
    keepPreviousData: true
  })
  const { data: categoriesData } = useQuery({
    queryKey: ['categories'],
    queryFn: () => {
      return categoryApi.getCategories()
    }
  })

  return (
    <div className='bg-gray-200 py-6'>
      <div className='container'>
      {ProductData&& (
        <div className='grid grid-cols-12 gap-6'>
          <div className='col-span-3'>
            <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []}  />
          </div>
          <div className='col-span-9'>
            <SortProductList queryConfig={queryConfig} pageSize={ProductData.data.data.pagination.page_size} />
            <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
              
                {ProductData.data.data.products.map((product) => (
                  <div className='col-span-1' key={product._id}>
                    {' '}
                    <Product product={product} />{' '}
                  </div>
                ))}
            </div>
            <Pagination queryConfig={queryConfig} pageSize={ProductData.data.data.pagination.page_size} />
          </div>
        </div>)}
      </div>
    </div>
  )
}
