import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model OfflineCenter
 *
 */
export type OfflineCenterModel = runtime.Types.Result.DefaultSelection<Prisma.$OfflineCenterPayload>;
export type AggregateOfflineCenter = {
    _count: OfflineCenterCountAggregateOutputType | null;
    _avg: OfflineCenterAvgAggregateOutputType | null;
    _sum: OfflineCenterSumAggregateOutputType | null;
    _min: OfflineCenterMinAggregateOutputType | null;
    _max: OfflineCenterMaxAggregateOutputType | null;
};
export type OfflineCenterAvgAggregateOutputType = {
    order: number | null;
};
export type OfflineCenterSumAggregateOutputType = {
    order: number | null;
};
export type OfflineCenterMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    city: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    locationUrl: string | null;
    isActive: boolean | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OfflineCenterMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    city: string | null;
    address: string | null;
    phone: string | null;
    email: string | null;
    locationUrl: string | null;
    isActive: boolean | null;
    order: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type OfflineCenterCountAggregateOutputType = {
    id: number;
    name: number;
    city: number;
    address: number;
    phone: number;
    email: number;
    image: number;
    locationUrl: number;
    isActive: number;
    order: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type OfflineCenterAvgAggregateInputType = {
    order?: true;
};
export type OfflineCenterSumAggregateInputType = {
    order?: true;
};
export type OfflineCenterMinAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    address?: true;
    phone?: true;
    email?: true;
    locationUrl?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OfflineCenterMaxAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    address?: true;
    phone?: true;
    email?: true;
    locationUrl?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type OfflineCenterCountAggregateInputType = {
    id?: true;
    name?: true;
    city?: true;
    address?: true;
    phone?: true;
    email?: true;
    image?: true;
    locationUrl?: true;
    isActive?: true;
    order?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type OfflineCenterAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineCenter to aggregate.
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineCenters to fetch.
     */
    orderBy?: Prisma.OfflineCenterOrderByWithRelationInput | Prisma.OfflineCenterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OfflineCenterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineCenters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineCenters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OfflineCenters
    **/
    _count?: true | OfflineCenterCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: OfflineCenterAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: OfflineCenterSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OfflineCenterMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OfflineCenterMaxAggregateInputType;
};
export type GetOfflineCenterAggregateType<T extends OfflineCenterAggregateArgs> = {
    [P in keyof T & keyof AggregateOfflineCenter]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOfflineCenter[P]> : Prisma.GetScalarType<T[P], AggregateOfflineCenter[P]>;
};
export type OfflineCenterGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfflineCenterWhereInput;
    orderBy?: Prisma.OfflineCenterOrderByWithAggregationInput | Prisma.OfflineCenterOrderByWithAggregationInput[];
    by: Prisma.OfflineCenterScalarFieldEnum[] | Prisma.OfflineCenterScalarFieldEnum;
    having?: Prisma.OfflineCenterScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfflineCenterCountAggregateInputType | true;
    _avg?: OfflineCenterAvgAggregateInputType;
    _sum?: OfflineCenterSumAggregateInputType;
    _min?: OfflineCenterMinAggregateInputType;
    _max?: OfflineCenterMaxAggregateInputType;
};
export type OfflineCenterGroupByOutputType = {
    id: string;
    name: string;
    city: string;
    address: string;
    phone: string | null;
    email: string | null;
    image: runtime.JsonValue | null;
    locationUrl: string | null;
    isActive: boolean;
    order: number;
    createdAt: Date;
    updatedAt: Date;
    _count: OfflineCenterCountAggregateOutputType | null;
    _avg: OfflineCenterAvgAggregateOutputType | null;
    _sum: OfflineCenterSumAggregateOutputType | null;
    _min: OfflineCenterMinAggregateOutputType | null;
    _max: OfflineCenterMaxAggregateOutputType | null;
};
type GetOfflineCenterGroupByPayload<T extends OfflineCenterGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfflineCenterGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfflineCenterGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfflineCenterGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfflineCenterGroupByOutputType[P]>;
}>>;
export type OfflineCenterWhereInput = {
    AND?: Prisma.OfflineCenterWhereInput | Prisma.OfflineCenterWhereInput[];
    OR?: Prisma.OfflineCenterWhereInput[];
    NOT?: Prisma.OfflineCenterWhereInput | Prisma.OfflineCenterWhereInput[];
    id?: Prisma.StringFilter<"OfflineCenter"> | string;
    name?: Prisma.StringFilter<"OfflineCenter"> | string;
    city?: Prisma.StringFilter<"OfflineCenter"> | string;
    address?: Prisma.StringFilter<"OfflineCenter"> | string;
    phone?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    email?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    image?: Prisma.JsonNullableFilter<"OfflineCenter">;
    locationUrl?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    isActive?: Prisma.BoolFilter<"OfflineCenter"> | boolean;
    order?: Prisma.IntFilter<"OfflineCenter"> | number;
    createdAt?: Prisma.DateTimeFilter<"OfflineCenter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OfflineCenter"> | Date | string;
    offlineBatches?: Prisma.OfflineBatchListRelationFilter;
};
export type OfflineCenterOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    offlineBatches?: Prisma.OfflineBatchOrderByRelationAggregateInput;
};
export type OfflineCenterWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.OfflineCenterWhereInput | Prisma.OfflineCenterWhereInput[];
    OR?: Prisma.OfflineCenterWhereInput[];
    NOT?: Prisma.OfflineCenterWhereInput | Prisma.OfflineCenterWhereInput[];
    name?: Prisma.StringFilter<"OfflineCenter"> | string;
    city?: Prisma.StringFilter<"OfflineCenter"> | string;
    address?: Prisma.StringFilter<"OfflineCenter"> | string;
    phone?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    email?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    image?: Prisma.JsonNullableFilter<"OfflineCenter">;
    locationUrl?: Prisma.StringNullableFilter<"OfflineCenter"> | string | null;
    isActive?: Prisma.BoolFilter<"OfflineCenter"> | boolean;
    order?: Prisma.IntFilter<"OfflineCenter"> | number;
    createdAt?: Prisma.DateTimeFilter<"OfflineCenter"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"OfflineCenter"> | Date | string;
    offlineBatches?: Prisma.OfflineBatchListRelationFilter;
}, "id">;
export type OfflineCenterOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrderInput | Prisma.SortOrder;
    image?: Prisma.SortOrderInput | Prisma.SortOrder;
    locationUrl?: Prisma.SortOrderInput | Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.OfflineCenterCountOrderByAggregateInput;
    _avg?: Prisma.OfflineCenterAvgOrderByAggregateInput;
    _max?: Prisma.OfflineCenterMaxOrderByAggregateInput;
    _min?: Prisma.OfflineCenterMinOrderByAggregateInput;
    _sum?: Prisma.OfflineCenterSumOrderByAggregateInput;
};
export type OfflineCenterScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfflineCenterScalarWhereWithAggregatesInput | Prisma.OfflineCenterScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfflineCenterScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfflineCenterScalarWhereWithAggregatesInput | Prisma.OfflineCenterScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OfflineCenter"> | string;
    name?: Prisma.StringWithAggregatesFilter<"OfflineCenter"> | string;
    city?: Prisma.StringWithAggregatesFilter<"OfflineCenter"> | string;
    address?: Prisma.StringWithAggregatesFilter<"OfflineCenter"> | string;
    phone?: Prisma.StringNullableWithAggregatesFilter<"OfflineCenter"> | string | null;
    email?: Prisma.StringNullableWithAggregatesFilter<"OfflineCenter"> | string | null;
    image?: Prisma.JsonNullableWithAggregatesFilter<"OfflineCenter">;
    locationUrl?: Prisma.StringNullableWithAggregatesFilter<"OfflineCenter"> | string | null;
    isActive?: Prisma.BoolWithAggregatesFilter<"OfflineCenter"> | boolean;
    order?: Prisma.IntWithAggregatesFilter<"OfflineCenter"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"OfflineCenter"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"OfflineCenter"> | Date | string;
};
export type OfflineCenterCreateInput = {
    id?: string;
    name: string;
    city: string;
    address: string;
    phone?: string | null;
    email?: string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: string | null;
    isActive?: boolean;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    offlineBatches?: Prisma.OfflineBatchCreateNestedManyWithoutCenterInput;
};
export type OfflineCenterUncheckedCreateInput = {
    id?: string;
    name: string;
    city: string;
    address: string;
    phone?: string | null;
    email?: string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: string | null;
    isActive?: boolean;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    offlineBatches?: Prisma.OfflineBatchUncheckedCreateNestedManyWithoutCenterInput;
};
export type OfflineCenterUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offlineBatches?: Prisma.OfflineBatchUpdateManyWithoutCenterNestedInput;
};
export type OfflineCenterUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    offlineBatches?: Prisma.OfflineBatchUncheckedUpdateManyWithoutCenterNestedInput;
};
export type OfflineCenterCreateManyInput = {
    id?: string;
    name: string;
    city: string;
    address: string;
    phone?: string | null;
    email?: string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: string | null;
    isActive?: boolean;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfflineCenterUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfflineCenterUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfflineCenterCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    locationUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfflineCenterAvgOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type OfflineCenterMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    locationUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfflineCenterMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    city?: Prisma.SortOrder;
    address?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    locationUrl?: Prisma.SortOrder;
    isActive?: Prisma.SortOrder;
    order?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type OfflineCenterSumOrderByAggregateInput = {
    order?: Prisma.SortOrder;
};
export type OfflineCenterScalarRelationFilter = {
    is?: Prisma.OfflineCenterWhereInput;
    isNot?: Prisma.OfflineCenterWhereInput;
};
export type OfflineCenterCreateNestedOneWithoutOfflineBatchesInput = {
    create?: Prisma.XOR<Prisma.OfflineCenterCreateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedCreateWithoutOfflineBatchesInput>;
    connectOrCreate?: Prisma.OfflineCenterCreateOrConnectWithoutOfflineBatchesInput;
    connect?: Prisma.OfflineCenterWhereUniqueInput;
};
export type OfflineCenterUpdateOneRequiredWithoutOfflineBatchesNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineCenterCreateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedCreateWithoutOfflineBatchesInput>;
    connectOrCreate?: Prisma.OfflineCenterCreateOrConnectWithoutOfflineBatchesInput;
    upsert?: Prisma.OfflineCenterUpsertWithoutOfflineBatchesInput;
    connect?: Prisma.OfflineCenterWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfflineCenterUpdateToOneWithWhereWithoutOfflineBatchesInput, Prisma.OfflineCenterUpdateWithoutOfflineBatchesInput>, Prisma.OfflineCenterUncheckedUpdateWithoutOfflineBatchesInput>;
};
export type OfflineCenterCreateWithoutOfflineBatchesInput = {
    id?: string;
    name: string;
    city: string;
    address: string;
    phone?: string | null;
    email?: string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: string | null;
    isActive?: boolean;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfflineCenterUncheckedCreateWithoutOfflineBatchesInput = {
    id?: string;
    name: string;
    city: string;
    address: string;
    phone?: string | null;
    email?: string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: string | null;
    isActive?: boolean;
    order?: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type OfflineCenterCreateOrConnectWithoutOfflineBatchesInput = {
    where: Prisma.OfflineCenterWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfflineCenterCreateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedCreateWithoutOfflineBatchesInput>;
};
export type OfflineCenterUpsertWithoutOfflineBatchesInput = {
    update: Prisma.XOR<Prisma.OfflineCenterUpdateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedUpdateWithoutOfflineBatchesInput>;
    create: Prisma.XOR<Prisma.OfflineCenterCreateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedCreateWithoutOfflineBatchesInput>;
    where?: Prisma.OfflineCenterWhereInput;
};
export type OfflineCenterUpdateToOneWithWhereWithoutOfflineBatchesInput = {
    where?: Prisma.OfflineCenterWhereInput;
    data: Prisma.XOR<Prisma.OfflineCenterUpdateWithoutOfflineBatchesInput, Prisma.OfflineCenterUncheckedUpdateWithoutOfflineBatchesInput>;
};
export type OfflineCenterUpdateWithoutOfflineBatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfflineCenterUncheckedUpdateWithoutOfflineBatchesInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    city?: Prisma.StringFieldUpdateOperationsInput | string;
    address?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    image?: Prisma.NullableJsonNullValueInput | runtime.InputJsonValue;
    locationUrl?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    isActive?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    order?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
/**
 * Count Type OfflineCenterCountOutputType
 */
export type OfflineCenterCountOutputType = {
    offlineBatches: number;
};
export type OfflineCenterCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offlineBatches?: boolean | OfflineCenterCountOutputTypeCountOfflineBatchesArgs;
};
/**
 * OfflineCenterCountOutputType without action
 */
export type OfflineCenterCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenterCountOutputType
     */
    select?: Prisma.OfflineCenterCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * OfflineCenterCountOutputType without action
 */
export type OfflineCenterCountOutputTypeCountOfflineBatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfflineBatchWhereInput;
};
export type OfflineCenterSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    image?: boolean;
    locationUrl?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    offlineBatches?: boolean | Prisma.OfflineCenter$offlineBatchesArgs<ExtArgs>;
    _count?: boolean | Prisma.OfflineCenterCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["offlineCenter"]>;
export type OfflineCenterSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    image?: boolean;
    locationUrl?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["offlineCenter"]>;
export type OfflineCenterSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    city?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    image?: boolean;
    locationUrl?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["offlineCenter"]>;
export type OfflineCenterSelectScalar = {
    id?: boolean;
    name?: boolean;
    city?: boolean;
    address?: boolean;
    phone?: boolean;
    email?: boolean;
    image?: boolean;
    locationUrl?: boolean;
    isActive?: boolean;
    order?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type OfflineCenterOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "city" | "address" | "phone" | "email" | "image" | "locationUrl" | "isActive" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["offlineCenter"]>;
export type OfflineCenterInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    offlineBatches?: boolean | Prisma.OfflineCenter$offlineBatchesArgs<ExtArgs>;
    _count?: boolean | Prisma.OfflineCenterCountOutputTypeDefaultArgs<ExtArgs>;
};
export type OfflineCenterIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type OfflineCenterIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $OfflineCenterPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OfflineCenter";
    objects: {
        offlineBatches: Prisma.$OfflineBatchPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        city: string;
        address: string;
        phone: string | null;
        email: string | null;
        image: runtime.JsonValue | null;
        locationUrl: string | null;
        isActive: boolean;
        order: number;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["offlineCenter"]>;
    composites: {};
};
export type OfflineCenterGetPayload<S extends boolean | null | undefined | OfflineCenterDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload, S>;
export type OfflineCenterCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfflineCenterFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfflineCenterCountAggregateInputType | true;
};
export interface OfflineCenterDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OfflineCenter'];
        meta: {
            name: 'OfflineCenter';
        };
    };
    /**
     * Find zero or one OfflineCenter that matches the filter.
     * @param {OfflineCenterFindUniqueArgs} args - Arguments to find a OfflineCenter
     * @example
     * // Get one OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfflineCenterFindUniqueArgs>(args: Prisma.SelectSubset<T, OfflineCenterFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OfflineCenter that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfflineCenterFindUniqueOrThrowArgs} args - Arguments to find a OfflineCenter
     * @example
     * // Get one OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfflineCenterFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfflineCenterFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OfflineCenter that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterFindFirstArgs} args - Arguments to find a OfflineCenter
     * @example
     * // Get one OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfflineCenterFindFirstArgs>(args?: Prisma.SelectSubset<T, OfflineCenterFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OfflineCenter that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterFindFirstOrThrowArgs} args - Arguments to find a OfflineCenter
     * @example
     * // Get one OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfflineCenterFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfflineCenterFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OfflineCenters that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfflineCenters
     * const offlineCenters = await prisma.offlineCenter.findMany()
     *
     * // Get first 10 OfflineCenters
     * const offlineCenters = await prisma.offlineCenter.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const offlineCenterWithIdOnly = await prisma.offlineCenter.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OfflineCenterFindManyArgs>(args?: Prisma.SelectSubset<T, OfflineCenterFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OfflineCenter.
     * @param {OfflineCenterCreateArgs} args - Arguments to create a OfflineCenter.
     * @example
     * // Create one OfflineCenter
     * const OfflineCenter = await prisma.offlineCenter.create({
     *   data: {
     *     // ... data to create a OfflineCenter
     *   }
     * })
     *
     */
    create<T extends OfflineCenterCreateArgs>(args: Prisma.SelectSubset<T, OfflineCenterCreateArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OfflineCenters.
     * @param {OfflineCenterCreateManyArgs} args - Arguments to create many OfflineCenters.
     * @example
     * // Create many OfflineCenters
     * const offlineCenter = await prisma.offlineCenter.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OfflineCenterCreateManyArgs>(args?: Prisma.SelectSubset<T, OfflineCenterCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OfflineCenters and returns the data saved in the database.
     * @param {OfflineCenterCreateManyAndReturnArgs} args - Arguments to create many OfflineCenters.
     * @example
     * // Create many OfflineCenters
     * const offlineCenter = await prisma.offlineCenter.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OfflineCenters and only return the `id`
     * const offlineCenterWithIdOnly = await prisma.offlineCenter.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OfflineCenterCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OfflineCenterCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OfflineCenter.
     * @param {OfflineCenterDeleteArgs} args - Arguments to delete one OfflineCenter.
     * @example
     * // Delete one OfflineCenter
     * const OfflineCenter = await prisma.offlineCenter.delete({
     *   where: {
     *     // ... filter to delete one OfflineCenter
     *   }
     * })
     *
     */
    delete<T extends OfflineCenterDeleteArgs>(args: Prisma.SelectSubset<T, OfflineCenterDeleteArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OfflineCenter.
     * @param {OfflineCenterUpdateArgs} args - Arguments to update one OfflineCenter.
     * @example
     * // Update one OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OfflineCenterUpdateArgs>(args: Prisma.SelectSubset<T, OfflineCenterUpdateArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OfflineCenters.
     * @param {OfflineCenterDeleteManyArgs} args - Arguments to filter OfflineCenters to delete.
     * @example
     * // Delete a few OfflineCenters
     * const { count } = await prisma.offlineCenter.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OfflineCenterDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfflineCenterDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OfflineCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfflineCenters
     * const offlineCenter = await prisma.offlineCenter.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OfflineCenterUpdateManyArgs>(args: Prisma.SelectSubset<T, OfflineCenterUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OfflineCenters and returns the data updated in the database.
     * @param {OfflineCenterUpdateManyAndReturnArgs} args - Arguments to update many OfflineCenters.
     * @example
     * // Update many OfflineCenters
     * const offlineCenter = await prisma.offlineCenter.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OfflineCenters and only return the `id`
     * const offlineCenterWithIdOnly = await prisma.offlineCenter.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends OfflineCenterUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OfflineCenterUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OfflineCenter.
     * @param {OfflineCenterUpsertArgs} args - Arguments to update or create a OfflineCenter.
     * @example
     * // Update or create a OfflineCenter
     * const offlineCenter = await prisma.offlineCenter.upsert({
     *   create: {
     *     // ... data to create a OfflineCenter
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfflineCenter we want to update
     *   }
     * })
     */
    upsert<T extends OfflineCenterUpsertArgs>(args: Prisma.SelectSubset<T, OfflineCenterUpsertArgs<ExtArgs>>): Prisma.Prisma__OfflineCenterClient<runtime.Types.Result.GetResult<Prisma.$OfflineCenterPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OfflineCenters.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterCountArgs} args - Arguments to filter OfflineCenters to count.
     * @example
     * // Count the number of OfflineCenters
     * const count = await prisma.offlineCenter.count({
     *   where: {
     *     // ... the filter for the OfflineCenters we want to count
     *   }
     * })
    **/
    count<T extends OfflineCenterCountArgs>(args?: Prisma.Subset<T, OfflineCenterCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfflineCenterCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OfflineCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OfflineCenterAggregateArgs>(args: Prisma.Subset<T, OfflineCenterAggregateArgs>): Prisma.PrismaPromise<GetOfflineCenterAggregateType<T>>;
    /**
     * Group by OfflineCenter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineCenterGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends OfflineCenterGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfflineCenterGroupByArgs['orderBy'];
    } : {
        orderBy?: OfflineCenterGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfflineCenterGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfflineCenterGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OfflineCenter model
     */
    readonly fields: OfflineCenterFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OfflineCenter.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OfflineCenterClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    offlineBatches<T extends Prisma.OfflineCenter$offlineBatchesArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfflineCenter$offlineBatchesArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the OfflineCenter model
 */
export interface OfflineCenterFieldRefs {
    readonly id: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly name: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly city: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly address: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly phone: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly email: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly image: Prisma.FieldRef<"OfflineCenter", 'Json'>;
    readonly locationUrl: Prisma.FieldRef<"OfflineCenter", 'String'>;
    readonly isActive: Prisma.FieldRef<"OfflineCenter", 'Boolean'>;
    readonly order: Prisma.FieldRef<"OfflineCenter", 'Int'>;
    readonly createdAt: Prisma.FieldRef<"OfflineCenter", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"OfflineCenter", 'DateTime'>;
}
/**
 * OfflineCenter findUnique
 */
export type OfflineCenterFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineCenter to fetch.
     */
    where: Prisma.OfflineCenterWhereUniqueInput;
};
/**
 * OfflineCenter findUniqueOrThrow
 */
export type OfflineCenterFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineCenter to fetch.
     */
    where: Prisma.OfflineCenterWhereUniqueInput;
};
/**
 * OfflineCenter findFirst
 */
export type OfflineCenterFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineCenter to fetch.
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineCenters to fetch.
     */
    orderBy?: Prisma.OfflineCenterOrderByWithRelationInput | Prisma.OfflineCenterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OfflineCenters.
     */
    cursor?: Prisma.OfflineCenterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineCenters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineCenters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OfflineCenters.
     */
    distinct?: Prisma.OfflineCenterScalarFieldEnum | Prisma.OfflineCenterScalarFieldEnum[];
};
/**
 * OfflineCenter findFirstOrThrow
 */
export type OfflineCenterFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineCenter to fetch.
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineCenters to fetch.
     */
    orderBy?: Prisma.OfflineCenterOrderByWithRelationInput | Prisma.OfflineCenterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OfflineCenters.
     */
    cursor?: Prisma.OfflineCenterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineCenters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineCenters.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OfflineCenters.
     */
    distinct?: Prisma.OfflineCenterScalarFieldEnum | Prisma.OfflineCenterScalarFieldEnum[];
};
/**
 * OfflineCenter findMany
 */
export type OfflineCenterFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineCenters to fetch.
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineCenters to fetch.
     */
    orderBy?: Prisma.OfflineCenterOrderByWithRelationInput | Prisma.OfflineCenterOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OfflineCenters.
     */
    cursor?: Prisma.OfflineCenterWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineCenters from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineCenters.
     */
    skip?: number;
    distinct?: Prisma.OfflineCenterScalarFieldEnum | Prisma.OfflineCenterScalarFieldEnum[];
};
/**
 * OfflineCenter create
 */
export type OfflineCenterCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * The data needed to create a OfflineCenter.
     */
    data: Prisma.XOR<Prisma.OfflineCenterCreateInput, Prisma.OfflineCenterUncheckedCreateInput>;
};
/**
 * OfflineCenter createMany
 */
export type OfflineCenterCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfflineCenters.
     */
    data: Prisma.OfflineCenterCreateManyInput | Prisma.OfflineCenterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OfflineCenter createManyAndReturn
 */
export type OfflineCenterCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * The data used to create many OfflineCenters.
     */
    data: Prisma.OfflineCenterCreateManyInput | Prisma.OfflineCenterCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OfflineCenter update
 */
export type OfflineCenterUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * The data needed to update a OfflineCenter.
     */
    data: Prisma.XOR<Prisma.OfflineCenterUpdateInput, Prisma.OfflineCenterUncheckedUpdateInput>;
    /**
     * Choose, which OfflineCenter to update.
     */
    where: Prisma.OfflineCenterWhereUniqueInput;
};
/**
 * OfflineCenter updateMany
 */
export type OfflineCenterUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OfflineCenters.
     */
    data: Prisma.XOR<Prisma.OfflineCenterUpdateManyMutationInput, Prisma.OfflineCenterUncheckedUpdateManyInput>;
    /**
     * Filter which OfflineCenters to update
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * Limit how many OfflineCenters to update.
     */
    limit?: number;
};
/**
 * OfflineCenter updateManyAndReturn
 */
export type OfflineCenterUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * The data used to update OfflineCenters.
     */
    data: Prisma.XOR<Prisma.OfflineCenterUpdateManyMutationInput, Prisma.OfflineCenterUncheckedUpdateManyInput>;
    /**
     * Filter which OfflineCenters to update
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * Limit how many OfflineCenters to update.
     */
    limit?: number;
};
/**
 * OfflineCenter upsert
 */
export type OfflineCenterUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * The filter to search for the OfflineCenter to update in case it exists.
     */
    where: Prisma.OfflineCenterWhereUniqueInput;
    /**
     * In case the OfflineCenter found by the `where` argument doesn't exist, create a new OfflineCenter with this data.
     */
    create: Prisma.XOR<Prisma.OfflineCenterCreateInput, Prisma.OfflineCenterUncheckedCreateInput>;
    /**
     * In case the OfflineCenter was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OfflineCenterUpdateInput, Prisma.OfflineCenterUncheckedUpdateInput>;
};
/**
 * OfflineCenter delete
 */
export type OfflineCenterDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
    /**
     * Filter which OfflineCenter to delete.
     */
    where: Prisma.OfflineCenterWhereUniqueInput;
};
/**
 * OfflineCenter deleteMany
 */
export type OfflineCenterDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineCenters to delete
     */
    where?: Prisma.OfflineCenterWhereInput;
    /**
     * Limit how many OfflineCenters to delete.
     */
    limit?: number;
};
/**
 * OfflineCenter.offlineBatches
 */
export type OfflineCenter$offlineBatchesArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBatch
     */
    select?: Prisma.OfflineBatchSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBatch
     */
    omit?: Prisma.OfflineBatchOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBatchInclude<ExtArgs> | null;
    where?: Prisma.OfflineBatchWhereInput;
    orderBy?: Prisma.OfflineBatchOrderByWithRelationInput | Prisma.OfflineBatchOrderByWithRelationInput[];
    cursor?: Prisma.OfflineBatchWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.OfflineBatchScalarFieldEnum | Prisma.OfflineBatchScalarFieldEnum[];
};
/**
 * OfflineCenter without action
 */
export type OfflineCenterDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineCenter
     */
    select?: Prisma.OfflineCenterSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineCenter
     */
    omit?: Prisma.OfflineCenterOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineCenterInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=OfflineCenter.d.ts.map