import { ApiProperty } from "@nestjs/swagger";
import { User } from "src/auth/entities/user.entity";
import { Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { CartItem } from "./cart-item.entity";
import { Order } from "src/orders/entities/order.entity";


@Entity({name:'cart'})
export class Cart {

@PrimaryGeneratedColumn('uuid')
  id: number;

  // Relación muchos a uno con User
  @OneToOne(
    () => User,
    user => user.cart)
  @JoinColumn({ name: 'userID' })
    user: User;
    
    // @OneToOne(
    // () => Order,
    // order => order.cart)
    // order: Order;
    // totalAmount: number;
    
  // Relación uno a muchos con CartItem
  @OneToMany(
    type => CartItem, 
    cartItem => cartItem.cart, 
    {cascade:true}
    )
    items: CartItem[];

  
 
}

