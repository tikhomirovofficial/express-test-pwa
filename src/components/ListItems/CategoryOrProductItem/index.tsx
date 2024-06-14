import React, { FC } from "react"
import { CartItemType } from "../../../features/cart/cartSlice"
import { AnalysisApi } from "../../../types/entities/analysis.types"
import { CategoryApi } from "../../../types/entities/categories.types"
import { CategoryItem } from "../CategoryItem"
import { AnalysisItem } from "../AnalysisItem"

type CategoryOrProductItem = {
    item: AnalysisApi | CategoryApi,
    toProducts: () => any,
    openAnalysisInfo: () => any,
    cartProducts: CartItemType[]

}
export const CategoryOrProductItem: FC<CategoryOrProductItem> = React.memo(({ item, toProducts, openAnalysisInfo, cartProducts }) => {
    const itemTyped = item as CategoryApi & AnalysisApi
    const isCategory = Object.hasOwn(itemTyped, "istake")

    if (isCategory) {
        return <CategoryItem clickHandle={toProducts} category={itemTyped as CategoryApi} />
    }
    return <AnalysisItem clickHandle={openAnalysisInfo} product={itemTyped as AnalysisApi} index={item.id} isInCart={cartProducts.some(cartProduct => cartProduct.id === item.id)} />

})