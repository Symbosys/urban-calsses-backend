import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model OfflineBooking
 *
 */
export type OfflineBookingModel = runtime.Types.Result.DefaultSelection<Prisma.$OfflineBookingPayload>;
export type AggregateOfflineBooking = {
    _count: OfflineBookingCountAggregateOutputType | null;
    _min: OfflineBookingMinAggregateOutputType | null;
    _max: OfflineBookingMaxAggregateOutputType | null;
};
export type OfflineBookingMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
    status: $Enums.OrderStatus | null;
    bookingDate: Date | null;
    userId: string | null;
    batchId: string | null;
    orderId: string | null;
};
export type OfflineBookingMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    email: string | null;
    phone: string | null;
    message: string | null;
    status: $Enums.OrderStatus | null;
    bookingDate: Date | null;
    userId: string | null;
    batchId: string | null;
    orderId: string | null;
};
export type OfflineBookingCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    phone: number;
    message: number;
    status: number;
    bookingDate: number;
    userId: number;
    batchId: number;
    orderId: number;
    _all: number;
};
export type OfflineBookingMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    message?: true;
    status?: true;
    bookingDate?: true;
    userId?: true;
    batchId?: true;
    orderId?: true;
};
export type OfflineBookingMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    message?: true;
    status?: true;
    bookingDate?: true;
    userId?: true;
    batchId?: true;
    orderId?: true;
};
export type OfflineBookingCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    phone?: true;
    message?: true;
    status?: true;
    bookingDate?: true;
    userId?: true;
    batchId?: true;
    orderId?: true;
    _all?: true;
};
export type OfflineBookingAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineBooking to aggregate.
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineBookings to fetch.
     */
    orderBy?: Prisma.OfflineBookingOrderByWithRelationInput | Prisma.OfflineBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.OfflineBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned OfflineBookings
    **/
    _count?: true | OfflineBookingCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: OfflineBookingMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: OfflineBookingMaxAggregateInputType;
};
export type GetOfflineBookingAggregateType<T extends OfflineBookingAggregateArgs> = {
    [P in keyof T & keyof AggregateOfflineBooking]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateOfflineBooking[P]> : Prisma.GetScalarType<T[P], AggregateOfflineBooking[P]>;
};
export type OfflineBookingGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.OfflineBookingWhereInput;
    orderBy?: Prisma.OfflineBookingOrderByWithAggregationInput | Prisma.OfflineBookingOrderByWithAggregationInput[];
    by: Prisma.OfflineBookingScalarFieldEnum[] | Prisma.OfflineBookingScalarFieldEnum;
    having?: Prisma.OfflineBookingScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: OfflineBookingCountAggregateInputType | true;
    _min?: OfflineBookingMinAggregateInputType;
    _max?: OfflineBookingMaxAggregateInputType;
};
export type OfflineBookingGroupByOutputType = {
    id: string;
    name: string;
    email: string;
    phone: string;
    message: string | null;
    status: $Enums.OrderStatus;
    bookingDate: Date;
    userId: string | null;
    batchId: string;
    orderId: string | null;
    _count: OfflineBookingCountAggregateOutputType | null;
    _min: OfflineBookingMinAggregateOutputType | null;
    _max: OfflineBookingMaxAggregateOutputType | null;
};
type GetOfflineBookingGroupByPayload<T extends OfflineBookingGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<OfflineBookingGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof OfflineBookingGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], OfflineBookingGroupByOutputType[P]> : Prisma.GetScalarType<T[P], OfflineBookingGroupByOutputType[P]>;
}>>;
export type OfflineBookingWhereInput = {
    AND?: Prisma.OfflineBookingWhereInput | Prisma.OfflineBookingWhereInput[];
    OR?: Prisma.OfflineBookingWhereInput[];
    NOT?: Prisma.OfflineBookingWhereInput | Prisma.OfflineBookingWhereInput[];
    id?: Prisma.StringFilter<"OfflineBooking"> | string;
    name?: Prisma.StringFilter<"OfflineBooking"> | string;
    email?: Prisma.StringFilter<"OfflineBooking"> | string;
    phone?: Prisma.StringFilter<"OfflineBooking"> | string;
    message?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"OfflineBooking"> | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFilter<"OfflineBooking"> | Date | string;
    userId?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    batchId?: Prisma.StringFilter<"OfflineBooking"> | string;
    orderId?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    batch?: Prisma.XOR<Prisma.OfflineBatchScalarRelationFilter, Prisma.OfflineBatchWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
};
export type OfflineBookingOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookingDate?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    batch?: Prisma.OfflineBatchOrderByWithRelationInput;
    order?: Prisma.OrderOrderByWithRelationInput;
};
export type OfflineBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    orderId?: string;
    AND?: Prisma.OfflineBookingWhereInput | Prisma.OfflineBookingWhereInput[];
    OR?: Prisma.OfflineBookingWhereInput[];
    NOT?: Prisma.OfflineBookingWhereInput | Prisma.OfflineBookingWhereInput[];
    name?: Prisma.StringFilter<"OfflineBooking"> | string;
    email?: Prisma.StringFilter<"OfflineBooking"> | string;
    phone?: Prisma.StringFilter<"OfflineBooking"> | string;
    message?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"OfflineBooking"> | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFilter<"OfflineBooking"> | Date | string;
    userId?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    batchId?: Prisma.StringFilter<"OfflineBooking"> | string;
    user?: Prisma.XOR<Prisma.UserNullableScalarRelationFilter, Prisma.UserWhereInput> | null;
    batch?: Prisma.XOR<Prisma.OfflineBatchScalarRelationFilter, Prisma.OfflineBatchWhereInput>;
    order?: Prisma.XOR<Prisma.OrderNullableScalarRelationFilter, Prisma.OrderWhereInput> | null;
}, "id" | "orderId">;
export type OfflineBookingOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    message?: Prisma.SortOrderInput | Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookingDate?: Prisma.SortOrder;
    userId?: Prisma.SortOrderInput | Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.OfflineBookingCountOrderByAggregateInput;
    _max?: Prisma.OfflineBookingMaxOrderByAggregateInput;
    _min?: Prisma.OfflineBookingMinOrderByAggregateInput;
};
export type OfflineBookingScalarWhereWithAggregatesInput = {
    AND?: Prisma.OfflineBookingScalarWhereWithAggregatesInput | Prisma.OfflineBookingScalarWhereWithAggregatesInput[];
    OR?: Prisma.OfflineBookingScalarWhereWithAggregatesInput[];
    NOT?: Prisma.OfflineBookingScalarWhereWithAggregatesInput | Prisma.OfflineBookingScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"OfflineBooking"> | string;
    name?: Prisma.StringWithAggregatesFilter<"OfflineBooking"> | string;
    email?: Prisma.StringWithAggregatesFilter<"OfflineBooking"> | string;
    phone?: Prisma.StringWithAggregatesFilter<"OfflineBooking"> | string;
    message?: Prisma.StringNullableWithAggregatesFilter<"OfflineBooking"> | string | null;
    status?: Prisma.EnumOrderStatusWithAggregatesFilter<"OfflineBooking"> | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeWithAggregatesFilter<"OfflineBooking"> | Date | string;
    userId?: Prisma.StringNullableWithAggregatesFilter<"OfflineBooking"> | string | null;
    batchId?: Prisma.StringWithAggregatesFilter<"OfflineBooking"> | string;
    orderId?: Prisma.StringNullableWithAggregatesFilter<"OfflineBooking"> | string | null;
};
export type OfflineBookingCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutOfflineBookingsInput;
    batch: Prisma.OfflineBatchCreateNestedOneWithoutBookingsInput;
    order?: Prisma.OrderCreateNestedOneWithoutOfflineBookingInput;
};
export type OfflineBookingUncheckedCreateInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    userId?: string | null;
    batchId: string;
    orderId?: string | null;
};
export type OfflineBookingUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutOfflineBookingsNestedInput;
    batch?: Prisma.OfflineBatchUpdateOneRequiredWithoutBookingsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutOfflineBookingNestedInput;
};
export type OfflineBookingUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingCreateManyInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    userId?: string | null;
    batchId: string;
    orderId?: string | null;
};
export type OfflineBookingUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type OfflineBookingUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingListRelationFilter = {
    every?: Prisma.OfflineBookingWhereInput;
    some?: Prisma.OfflineBookingWhereInput;
    none?: Prisma.OfflineBookingWhereInput;
};
export type OfflineBookingOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type OfflineBookingNullableScalarRelationFilter = {
    is?: Prisma.OfflineBookingWhereInput | null;
    isNot?: Prisma.OfflineBookingWhereInput | null;
};
export type OfflineBookingCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookingDate?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type OfflineBookingMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookingDate?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type OfflineBookingMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    phone?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    bookingDate?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    batchId?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
};
export type OfflineBookingCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput> | Prisma.OfflineBookingCreateWithoutUserInput[] | Prisma.OfflineBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutUserInput | Prisma.OfflineBookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OfflineBookingCreateManyUserInputEnvelope;
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
};
export type OfflineBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput> | Prisma.OfflineBookingCreateWithoutUserInput[] | Prisma.OfflineBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutUserInput | Prisma.OfflineBookingCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.OfflineBookingCreateManyUserInputEnvelope;
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
};
export type OfflineBookingUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput> | Prisma.OfflineBookingCreateWithoutUserInput[] | Prisma.OfflineBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutUserInput | Prisma.OfflineBookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OfflineBookingUpsertWithWhereUniqueWithoutUserInput | Prisma.OfflineBookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OfflineBookingCreateManyUserInputEnvelope;
    set?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    disconnect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    delete?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    update?: Prisma.OfflineBookingUpdateWithWhereUniqueWithoutUserInput | Prisma.OfflineBookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OfflineBookingUpdateManyWithWhereWithoutUserInput | Prisma.OfflineBookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
};
export type OfflineBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput> | Prisma.OfflineBookingCreateWithoutUserInput[] | Prisma.OfflineBookingUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutUserInput | Prisma.OfflineBookingCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.OfflineBookingUpsertWithWhereUniqueWithoutUserInput | Prisma.OfflineBookingUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.OfflineBookingCreateManyUserInputEnvelope;
    set?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    disconnect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    delete?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    update?: Prisma.OfflineBookingUpdateWithWhereUniqueWithoutUserInput | Prisma.OfflineBookingUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.OfflineBookingUpdateManyWithWhereWithoutUserInput | Prisma.OfflineBookingUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
};
export type OfflineBookingCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OfflineBookingWhereUniqueInput;
};
export type OfflineBookingUncheckedCreateNestedOneWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutOrderInput;
    connect?: Prisma.OfflineBookingWhereUniqueInput;
};
export type OfflineBookingUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OfflineBookingUpsertWithoutOrderInput;
    disconnect?: Prisma.OfflineBookingWhereInput | boolean;
    delete?: Prisma.OfflineBookingWhereInput | boolean;
    connect?: Prisma.OfflineBookingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfflineBookingUpdateToOneWithWhereWithoutOrderInput, Prisma.OfflineBookingUpdateWithoutOrderInput>, Prisma.OfflineBookingUncheckedUpdateWithoutOrderInput>;
};
export type OfflineBookingUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutOrderInput;
    upsert?: Prisma.OfflineBookingUpsertWithoutOrderInput;
    disconnect?: Prisma.OfflineBookingWhereInput | boolean;
    delete?: Prisma.OfflineBookingWhereInput | boolean;
    connect?: Prisma.OfflineBookingWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.OfflineBookingUpdateToOneWithWhereWithoutOrderInput, Prisma.OfflineBookingUpdateWithoutOrderInput>, Prisma.OfflineBookingUncheckedUpdateWithoutOrderInput>;
};
export type OfflineBookingCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput> | Prisma.OfflineBookingCreateWithoutBatchInput[] | Prisma.OfflineBookingUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutBatchInput | Prisma.OfflineBookingCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.OfflineBookingCreateManyBatchInputEnvelope;
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
};
export type OfflineBookingUncheckedCreateNestedManyWithoutBatchInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput> | Prisma.OfflineBookingCreateWithoutBatchInput[] | Prisma.OfflineBookingUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutBatchInput | Prisma.OfflineBookingCreateOrConnectWithoutBatchInput[];
    createMany?: Prisma.OfflineBookingCreateManyBatchInputEnvelope;
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
};
export type OfflineBookingUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput> | Prisma.OfflineBookingCreateWithoutBatchInput[] | Prisma.OfflineBookingUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutBatchInput | Prisma.OfflineBookingCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.OfflineBookingUpsertWithWhereUniqueWithoutBatchInput | Prisma.OfflineBookingUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.OfflineBookingCreateManyBatchInputEnvelope;
    set?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    disconnect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    delete?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    update?: Prisma.OfflineBookingUpdateWithWhereUniqueWithoutBatchInput | Prisma.OfflineBookingUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.OfflineBookingUpdateManyWithWhereWithoutBatchInput | Prisma.OfflineBookingUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
};
export type OfflineBookingUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput> | Prisma.OfflineBookingCreateWithoutBatchInput[] | Prisma.OfflineBookingUncheckedCreateWithoutBatchInput[];
    connectOrCreate?: Prisma.OfflineBookingCreateOrConnectWithoutBatchInput | Prisma.OfflineBookingCreateOrConnectWithoutBatchInput[];
    upsert?: Prisma.OfflineBookingUpsertWithWhereUniqueWithoutBatchInput | Prisma.OfflineBookingUpsertWithWhereUniqueWithoutBatchInput[];
    createMany?: Prisma.OfflineBookingCreateManyBatchInputEnvelope;
    set?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    disconnect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    delete?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    connect?: Prisma.OfflineBookingWhereUniqueInput | Prisma.OfflineBookingWhereUniqueInput[];
    update?: Prisma.OfflineBookingUpdateWithWhereUniqueWithoutBatchInput | Prisma.OfflineBookingUpdateWithWhereUniqueWithoutBatchInput[];
    updateMany?: Prisma.OfflineBookingUpdateManyWithWhereWithoutBatchInput | Prisma.OfflineBookingUpdateManyWithWhereWithoutBatchInput[];
    deleteMany?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
};
export type OfflineBookingCreateWithoutUserInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    batch: Prisma.OfflineBatchCreateNestedOneWithoutBookingsInput;
    order?: Prisma.OrderCreateNestedOneWithoutOfflineBookingInput;
};
export type OfflineBookingUncheckedCreateWithoutUserInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    batchId: string;
    orderId?: string | null;
};
export type OfflineBookingCreateOrConnectWithoutUserInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput>;
};
export type OfflineBookingCreateManyUserInputEnvelope = {
    data: Prisma.OfflineBookingCreateManyUserInput | Prisma.OfflineBookingCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type OfflineBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutUserInput, Prisma.OfflineBookingUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutUserInput, Prisma.OfflineBookingUncheckedCreateWithoutUserInput>;
};
export type OfflineBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutUserInput, Prisma.OfflineBookingUncheckedUpdateWithoutUserInput>;
};
export type OfflineBookingUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.OfflineBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.OfflineBookingUpdateManyMutationInput, Prisma.OfflineBookingUncheckedUpdateManyWithoutUserInput>;
};
export type OfflineBookingScalarWhereInput = {
    AND?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
    OR?: Prisma.OfflineBookingScalarWhereInput[];
    NOT?: Prisma.OfflineBookingScalarWhereInput | Prisma.OfflineBookingScalarWhereInput[];
    id?: Prisma.StringFilter<"OfflineBooking"> | string;
    name?: Prisma.StringFilter<"OfflineBooking"> | string;
    email?: Prisma.StringFilter<"OfflineBooking"> | string;
    phone?: Prisma.StringFilter<"OfflineBooking"> | string;
    message?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    status?: Prisma.EnumOrderStatusFilter<"OfflineBooking"> | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFilter<"OfflineBooking"> | Date | string;
    userId?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
    batchId?: Prisma.StringFilter<"OfflineBooking"> | string;
    orderId?: Prisma.StringNullableFilter<"OfflineBooking"> | string | null;
};
export type OfflineBookingCreateWithoutOrderInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutOfflineBookingsInput;
    batch: Prisma.OfflineBatchCreateNestedOneWithoutBookingsInput;
};
export type OfflineBookingUncheckedCreateWithoutOrderInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    userId?: string | null;
    batchId: string;
};
export type OfflineBookingCreateOrConnectWithoutOrderInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
};
export type OfflineBookingUpsertWithoutOrderInput = {
    update: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutOrderInput, Prisma.OfflineBookingUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutOrderInput, Prisma.OfflineBookingUncheckedCreateWithoutOrderInput>;
    where?: Prisma.OfflineBookingWhereInput;
};
export type OfflineBookingUpdateToOneWithWhereWithoutOrderInput = {
    where?: Prisma.OfflineBookingWhereInput;
    data: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutOrderInput, Prisma.OfflineBookingUncheckedUpdateWithoutOrderInput>;
};
export type OfflineBookingUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutOfflineBookingsNestedInput;
    batch?: Prisma.OfflineBatchUpdateOneRequiredWithoutBookingsNestedInput;
};
export type OfflineBookingUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
};
export type OfflineBookingCreateWithoutBatchInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    user?: Prisma.UserCreateNestedOneWithoutOfflineBookingsInput;
    order?: Prisma.OrderCreateNestedOneWithoutOfflineBookingInput;
};
export type OfflineBookingUncheckedCreateWithoutBatchInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    userId?: string | null;
    orderId?: string | null;
};
export type OfflineBookingCreateOrConnectWithoutBatchInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput>;
};
export type OfflineBookingCreateManyBatchInputEnvelope = {
    data: Prisma.OfflineBookingCreateManyBatchInput | Prisma.OfflineBookingCreateManyBatchInput[];
    skipDuplicates?: boolean;
};
export type OfflineBookingUpsertWithWhereUniqueWithoutBatchInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    update: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutBatchInput, Prisma.OfflineBookingUncheckedUpdateWithoutBatchInput>;
    create: Prisma.XOR<Prisma.OfflineBookingCreateWithoutBatchInput, Prisma.OfflineBookingUncheckedCreateWithoutBatchInput>;
};
export type OfflineBookingUpdateWithWhereUniqueWithoutBatchInput = {
    where: Prisma.OfflineBookingWhereUniqueInput;
    data: Prisma.XOR<Prisma.OfflineBookingUpdateWithoutBatchInput, Prisma.OfflineBookingUncheckedUpdateWithoutBatchInput>;
};
export type OfflineBookingUpdateManyWithWhereWithoutBatchInput = {
    where: Prisma.OfflineBookingScalarWhereInput;
    data: Prisma.XOR<Prisma.OfflineBookingUpdateManyMutationInput, Prisma.OfflineBookingUncheckedUpdateManyWithoutBatchInput>;
};
export type OfflineBookingCreateManyUserInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    batchId: string;
    orderId?: string | null;
};
export type OfflineBookingUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batch?: Prisma.OfflineBatchUpdateOneRequiredWithoutBookingsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutOfflineBookingNestedInput;
};
export type OfflineBookingUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    batchId?: Prisma.StringFieldUpdateOperationsInput | string;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingCreateManyBatchInput = {
    id?: string;
    name: string;
    email: string;
    phone: string;
    message?: string | null;
    status?: $Enums.OrderStatus;
    bookingDate?: Date | string;
    userId?: string | null;
    orderId?: string | null;
};
export type OfflineBookingUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneWithoutOfflineBookingsNestedInput;
    order?: Prisma.OrderUpdateOneWithoutOfflineBookingNestedInput;
};
export type OfflineBookingUncheckedUpdateWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingUncheckedUpdateManyWithoutBatchInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    phone?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    status?: Prisma.EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus;
    bookingDate?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    userId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    orderId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type OfflineBookingSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    status?: boolean;
    bookingDate?: boolean;
    userId?: boolean;
    batchId?: boolean;
    orderId?: boolean;
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
}, ExtArgs["result"]["offlineBooking"]>;
export type OfflineBookingSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    status?: boolean;
    bookingDate?: boolean;
    userId?: boolean;
    batchId?: boolean;
    orderId?: boolean;
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
}, ExtArgs["result"]["offlineBooking"]>;
export type OfflineBookingSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    status?: boolean;
    bookingDate?: boolean;
    userId?: boolean;
    batchId?: boolean;
    orderId?: boolean;
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
}, ExtArgs["result"]["offlineBooking"]>;
export type OfflineBookingSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    message?: boolean;
    status?: boolean;
    bookingDate?: boolean;
    userId?: boolean;
    batchId?: boolean;
    orderId?: boolean;
};
export type OfflineBookingOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "phone" | "message" | "status" | "bookingDate" | "userId" | "batchId" | "orderId", ExtArgs["result"]["offlineBooking"]>;
export type OfflineBookingInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
};
export type OfflineBookingIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
};
export type OfflineBookingIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.OfflineBooking$userArgs<ExtArgs>;
    batch?: boolean | Prisma.OfflineBatchDefaultArgs<ExtArgs>;
    order?: boolean | Prisma.OfflineBooking$orderArgs<ExtArgs>;
};
export type $OfflineBookingPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "OfflineBooking";
    objects: {
        user: Prisma.$UserPayload<ExtArgs> | null;
        batch: Prisma.$OfflineBatchPayload<ExtArgs>;
        order: Prisma.$OrderPayload<ExtArgs> | null;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        email: string;
        phone: string;
        message: string | null;
        status: $Enums.OrderStatus;
        bookingDate: Date;
        userId: string | null;
        batchId: string;
        orderId: string | null;
    }, ExtArgs["result"]["offlineBooking"]>;
    composites: {};
};
export type OfflineBookingGetPayload<S extends boolean | null | undefined | OfflineBookingDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload, S>;
export type OfflineBookingCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<OfflineBookingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: OfflineBookingCountAggregateInputType | true;
};
export interface OfflineBookingDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['OfflineBooking'];
        meta: {
            name: 'OfflineBooking';
        };
    };
    /**
     * Find zero or one OfflineBooking that matches the filter.
     * @param {OfflineBookingFindUniqueArgs} args - Arguments to find a OfflineBooking
     * @example
     * // Get one OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OfflineBookingFindUniqueArgs>(args: Prisma.SelectSubset<T, OfflineBookingFindUniqueArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one OfflineBooking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OfflineBookingFindUniqueOrThrowArgs} args - Arguments to find a OfflineBooking
     * @example
     * // Get one OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OfflineBookingFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, OfflineBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OfflineBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingFindFirstArgs} args - Arguments to find a OfflineBooking
     * @example
     * // Get one OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OfflineBookingFindFirstArgs>(args?: Prisma.SelectSubset<T, OfflineBookingFindFirstArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first OfflineBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingFindFirstOrThrowArgs} args - Arguments to find a OfflineBooking
     * @example
     * // Get one OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OfflineBookingFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, OfflineBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more OfflineBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OfflineBookings
     * const offlineBookings = await prisma.offlineBooking.findMany()
     *
     * // Get first 10 OfflineBookings
     * const offlineBookings = await prisma.offlineBooking.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const offlineBookingWithIdOnly = await prisma.offlineBooking.findMany({ select: { id: true } })
     *
     */
    findMany<T extends OfflineBookingFindManyArgs>(args?: Prisma.SelectSubset<T, OfflineBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a OfflineBooking.
     * @param {OfflineBookingCreateArgs} args - Arguments to create a OfflineBooking.
     * @example
     * // Create one OfflineBooking
     * const OfflineBooking = await prisma.offlineBooking.create({
     *   data: {
     *     // ... data to create a OfflineBooking
     *   }
     * })
     *
     */
    create<T extends OfflineBookingCreateArgs>(args: Prisma.SelectSubset<T, OfflineBookingCreateArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many OfflineBookings.
     * @param {OfflineBookingCreateManyArgs} args - Arguments to create many OfflineBookings.
     * @example
     * // Create many OfflineBookings
     * const offlineBooking = await prisma.offlineBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends OfflineBookingCreateManyArgs>(args?: Prisma.SelectSubset<T, OfflineBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many OfflineBookings and returns the data saved in the database.
     * @param {OfflineBookingCreateManyAndReturnArgs} args - Arguments to create many OfflineBookings.
     * @example
     * // Create many OfflineBookings
     * const offlineBooking = await prisma.offlineBooking.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many OfflineBookings and only return the `id`
     * const offlineBookingWithIdOnly = await prisma.offlineBooking.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends OfflineBookingCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, OfflineBookingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a OfflineBooking.
     * @param {OfflineBookingDeleteArgs} args - Arguments to delete one OfflineBooking.
     * @example
     * // Delete one OfflineBooking
     * const OfflineBooking = await prisma.offlineBooking.delete({
     *   where: {
     *     // ... filter to delete one OfflineBooking
     *   }
     * })
     *
     */
    delete<T extends OfflineBookingDeleteArgs>(args: Prisma.SelectSubset<T, OfflineBookingDeleteArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one OfflineBooking.
     * @param {OfflineBookingUpdateArgs} args - Arguments to update one OfflineBooking.
     * @example
     * // Update one OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends OfflineBookingUpdateArgs>(args: Prisma.SelectSubset<T, OfflineBookingUpdateArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more OfflineBookings.
     * @param {OfflineBookingDeleteManyArgs} args - Arguments to filter OfflineBookings to delete.
     * @example
     * // Delete a few OfflineBookings
     * const { count } = await prisma.offlineBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends OfflineBookingDeleteManyArgs>(args?: Prisma.SelectSubset<T, OfflineBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OfflineBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OfflineBookings
     * const offlineBooking = await prisma.offlineBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends OfflineBookingUpdateManyArgs>(args: Prisma.SelectSubset<T, OfflineBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more OfflineBookings and returns the data updated in the database.
     * @param {OfflineBookingUpdateManyAndReturnArgs} args - Arguments to update many OfflineBookings.
     * @example
     * // Update many OfflineBookings
     * const offlineBooking = await prisma.offlineBooking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more OfflineBookings and only return the `id`
     * const offlineBookingWithIdOnly = await prisma.offlineBooking.updateManyAndReturn({
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
    updateManyAndReturn<T extends OfflineBookingUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, OfflineBookingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one OfflineBooking.
     * @param {OfflineBookingUpsertArgs} args - Arguments to update or create a OfflineBooking.
     * @example
     * // Update or create a OfflineBooking
     * const offlineBooking = await prisma.offlineBooking.upsert({
     *   create: {
     *     // ... data to create a OfflineBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OfflineBooking we want to update
     *   }
     * })
     */
    upsert<T extends OfflineBookingUpsertArgs>(args: Prisma.SelectSubset<T, OfflineBookingUpsertArgs<ExtArgs>>): Prisma.Prisma__OfflineBookingClient<runtime.Types.Result.GetResult<Prisma.$OfflineBookingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of OfflineBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingCountArgs} args - Arguments to filter OfflineBookings to count.
     * @example
     * // Count the number of OfflineBookings
     * const count = await prisma.offlineBooking.count({
     *   where: {
     *     // ... the filter for the OfflineBookings we want to count
     *   }
     * })
    **/
    count<T extends OfflineBookingCountArgs>(args?: Prisma.Subset<T, OfflineBookingCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], OfflineBookingCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a OfflineBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OfflineBookingAggregateArgs>(args: Prisma.Subset<T, OfflineBookingAggregateArgs>): Prisma.PrismaPromise<GetOfflineBookingAggregateType<T>>;
    /**
     * Group by OfflineBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OfflineBookingGroupByArgs} args - Group by arguments.
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
    groupBy<T extends OfflineBookingGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: OfflineBookingGroupByArgs['orderBy'];
    } : {
        orderBy?: OfflineBookingGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, OfflineBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOfflineBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the OfflineBooking model
     */
    readonly fields: OfflineBookingFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for OfflineBooking.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__OfflineBookingClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.OfflineBooking$userArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfflineBooking$userArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    batch<T extends Prisma.OfflineBatchDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfflineBatchDefaultArgs<ExtArgs>>): Prisma.Prisma__OfflineBatchClient<runtime.Types.Result.GetResult<Prisma.$OfflineBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    order<T extends Prisma.OfflineBooking$orderArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.OfflineBooking$orderArgs<ExtArgs>>): Prisma.Prisma__OrderClient<runtime.Types.Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
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
 * Fields of the OfflineBooking model
 */
export interface OfflineBookingFieldRefs {
    readonly id: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly name: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly email: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly phone: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly message: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly status: Prisma.FieldRef<"OfflineBooking", 'OrderStatus'>;
    readonly bookingDate: Prisma.FieldRef<"OfflineBooking", 'DateTime'>;
    readonly userId: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly batchId: Prisma.FieldRef<"OfflineBooking", 'String'>;
    readonly orderId: Prisma.FieldRef<"OfflineBooking", 'String'>;
}
/**
 * OfflineBooking findUnique
 */
export type OfflineBookingFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineBooking to fetch.
     */
    where: Prisma.OfflineBookingWhereUniqueInput;
};
/**
 * OfflineBooking findUniqueOrThrow
 */
export type OfflineBookingFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineBooking to fetch.
     */
    where: Prisma.OfflineBookingWhereUniqueInput;
};
/**
 * OfflineBooking findFirst
 */
export type OfflineBookingFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineBooking to fetch.
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineBookings to fetch.
     */
    orderBy?: Prisma.OfflineBookingOrderByWithRelationInput | Prisma.OfflineBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OfflineBookings.
     */
    cursor?: Prisma.OfflineBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OfflineBookings.
     */
    distinct?: Prisma.OfflineBookingScalarFieldEnum | Prisma.OfflineBookingScalarFieldEnum[];
};
/**
 * OfflineBooking findFirstOrThrow
 */
export type OfflineBookingFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineBooking to fetch.
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineBookings to fetch.
     */
    orderBy?: Prisma.OfflineBookingOrderByWithRelationInput | Prisma.OfflineBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for OfflineBookings.
     */
    cursor?: Prisma.OfflineBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineBookings.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of OfflineBookings.
     */
    distinct?: Prisma.OfflineBookingScalarFieldEnum | Prisma.OfflineBookingScalarFieldEnum[];
};
/**
 * OfflineBooking findMany
 */
export type OfflineBookingFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter, which OfflineBookings to fetch.
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of OfflineBookings to fetch.
     */
    orderBy?: Prisma.OfflineBookingOrderByWithRelationInput | Prisma.OfflineBookingOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing OfflineBookings.
     */
    cursor?: Prisma.OfflineBookingWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` OfflineBookings from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` OfflineBookings.
     */
    skip?: number;
    distinct?: Prisma.OfflineBookingScalarFieldEnum | Prisma.OfflineBookingScalarFieldEnum[];
};
/**
 * OfflineBooking create
 */
export type OfflineBookingCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * The data needed to create a OfflineBooking.
     */
    data: Prisma.XOR<Prisma.OfflineBookingCreateInput, Prisma.OfflineBookingUncheckedCreateInput>;
};
/**
 * OfflineBooking createMany
 */
export type OfflineBookingCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many OfflineBookings.
     */
    data: Prisma.OfflineBookingCreateManyInput | Prisma.OfflineBookingCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * OfflineBooking createManyAndReturn
 */
export type OfflineBookingCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * The data used to create many OfflineBookings.
     */
    data: Prisma.OfflineBookingCreateManyInput | Prisma.OfflineBookingCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * OfflineBooking update
 */
export type OfflineBookingUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * The data needed to update a OfflineBooking.
     */
    data: Prisma.XOR<Prisma.OfflineBookingUpdateInput, Prisma.OfflineBookingUncheckedUpdateInput>;
    /**
     * Choose, which OfflineBooking to update.
     */
    where: Prisma.OfflineBookingWhereUniqueInput;
};
/**
 * OfflineBooking updateMany
 */
export type OfflineBookingUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update OfflineBookings.
     */
    data: Prisma.XOR<Prisma.OfflineBookingUpdateManyMutationInput, Prisma.OfflineBookingUncheckedUpdateManyInput>;
    /**
     * Filter which OfflineBookings to update
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * Limit how many OfflineBookings to update.
     */
    limit?: number;
};
/**
 * OfflineBooking updateManyAndReturn
 */
export type OfflineBookingUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * The data used to update OfflineBookings.
     */
    data: Prisma.XOR<Prisma.OfflineBookingUpdateManyMutationInput, Prisma.OfflineBookingUncheckedUpdateManyInput>;
    /**
     * Filter which OfflineBookings to update
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * Limit how many OfflineBookings to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * OfflineBooking upsert
 */
export type OfflineBookingUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * The filter to search for the OfflineBooking to update in case it exists.
     */
    where: Prisma.OfflineBookingWhereUniqueInput;
    /**
     * In case the OfflineBooking found by the `where` argument doesn't exist, create a new OfflineBooking with this data.
     */
    create: Prisma.XOR<Prisma.OfflineBookingCreateInput, Prisma.OfflineBookingUncheckedCreateInput>;
    /**
     * In case the OfflineBooking was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.OfflineBookingUpdateInput, Prisma.OfflineBookingUncheckedUpdateInput>;
};
/**
 * OfflineBooking delete
 */
export type OfflineBookingDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
    /**
     * Filter which OfflineBooking to delete.
     */
    where: Prisma.OfflineBookingWhereUniqueInput;
};
/**
 * OfflineBooking deleteMany
 */
export type OfflineBookingDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which OfflineBookings to delete
     */
    where?: Prisma.OfflineBookingWhereInput;
    /**
     * Limit how many OfflineBookings to delete.
     */
    limit?: number;
};
/**
 * OfflineBooking.user
 */
export type OfflineBooking$userArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: Prisma.UserSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the User
     */
    omit?: Prisma.UserOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
};
/**
 * OfflineBooking.order
 */
export type OfflineBooking$orderArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: Prisma.OrderSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Order
     */
    omit?: Prisma.OrderOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OrderInclude<ExtArgs> | null;
    where?: Prisma.OrderWhereInput;
};
/**
 * OfflineBooking without action
 */
export type OfflineBookingDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OfflineBooking
     */
    select?: Prisma.OfflineBookingSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the OfflineBooking
     */
    omit?: Prisma.OfflineBookingOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.OfflineBookingInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=OfflineBooking.d.ts.map