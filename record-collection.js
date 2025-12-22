const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


// Функция обновляет коллекцию альбомов по 4 правилам. Всегда возвращает весь объект records

const updateRecords = (records,id,prop,value) => {
    // Правило 1: Пустая строка = удалить свойство из альбома (для любого prop)
    if (value === "") {
    delete records[id][prop];
    return records
  }
    // Правило 2: Обычное присваивание значения (только НЕ для tracks)
  else if (value !== "" && prop !== "tracks" ) {
    records[id][prop] = value;
    return records
  }
    // Правило 3: Tracks отсутствует — создать пустой массив и добавить первый трек
  else if (prop === "tracks" && value !== "" && !records[id].hasOwnProperty("tracks")) {
    records[id][prop] = [];
    records[id][prop].push(value);
    return records
  }
    // Правило 4: Добавить новый трек в существующий массив tracks
  else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
    return records;
  }
}

// 5 тестов
console.log(updateRecords(recordCollection, 5439, "artist", ""));
console.log(updateRecords(recordCollection, 5439, "artist", "ABBA"));
console.log(updateRecords(recordCollection, 5439, "tracks", "Take a Chance"));
console.log(updateRecords(recordCollection, 2468, "tracks", "New Song"));
console.log(updateRecords(recordCollection, 5448, "artist", "Test"));