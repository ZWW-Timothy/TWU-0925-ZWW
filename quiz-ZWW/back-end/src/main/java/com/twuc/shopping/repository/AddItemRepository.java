package com.twuc.shopping.repository;

import org.springframework.data.repository.CrudRepository;

import java.util.List;
import java.util.Optional;

public interface AddItemRepository extends CrudRepository<com.twuc.shopping.entity.AddItemEntity, Integer> {
    List<com.twuc.shopping.entity.AddItemEntity> findAll();
    Optional<com.twuc.shopping.entity.AddItemEntity> findById(Integer itemId);
}
