package com.twuc.shopping.api;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;

@RestController
public class AddItemController {

    private final com.twuc.shopping.repository.AddItemRepository addItemRepository;
    private final com.twuc.shopping.repository.BuyListRepository buyListRepository;

    public AddItemController(com.twuc.shopping.repository.AddItemRepository addItemRepository, com.twuc.shopping.repository.BuyListRepository buyListRepository) {
        this.addItemRepository = addItemRepository;
        this.buyListRepository = buyListRepository;
    }

    @PostMapping("/addItem/add")
    public ResponseEntity addItem(@RequestBody @Valid com.twuc.shopping.entity.AddItemEntity addItem) {
        if (!addItemRepository.existsById(addItem.getItemId())) {
            return  ResponseEntity.badRequest().build();
        }
        com.twuc.shopping.entity.AddItemEntity addItemEntity = com.twuc.shopping.entity.AddItemEntity.builder()
                .itemName(addItem.getItemName())
                .itemPrice(addItem.getItemPrice())
                .itemUnit(addItem.getItemUnit())
                .itemImgURL(addItem.getItemImgURL())
                .build();
        addItemRepository.save(addItemEntity);
        return ResponseEntity.created(null).build();
    }
}
