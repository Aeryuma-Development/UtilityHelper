function CommandOptionType(args) {
  if (args === "SUB_COMMAND") {
    return 1
  }
  if (args === "SUB_COMMAND_GROUP") {
    return 2
  }
  if (args === "STRING") {
    return 3
  }
  if (args === "INTEGER") {
    return 4
  }
  if (args === "BOOLEAN") {
    return 5
  }
  if (args === "USER") {
    return 6
  }
  if (args === "CHANNEL") {
    return 7
  }
  if (args === "ROLE") {
    return 8
  }
  if (args === "MENTIONABLE") {
    return 9
  }
  if (args === "NUMBER") {
    return 10
  }
  if (args === "ATTACHMENT") {
    return 11
  }
}

function CommandType(args) {
  if (args === "CHAT_INPUT") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
  if (args === "MESSAGE") {
    return 3
  }
}

function CommandPermissionType(args) {
  if (args === "ROLE") {
    return 1
  }
  if (args === "USER") {
    return 2
  }
}

function ButtonStyle(args) {
  if (args === "Primary") {
    return 1
  }
  if (args === "Secondary") {
    return 2
  }
  if (args === "Success") {
    return 3
  }
  if (args === "Danger") {
    return 4
  }
  if (args === "Link") {
    return 5
  }
}

function TextInputStyle(args) {
  if (args === "Short") {
    return 1
  }
  if (args === "Paragraph") {
    return 2
  }
}

function ResolveColor(args) {
  if (!args.startsWith('#')) {
    var warna = args.toLowerCase()
    if (args === "green") {
      return 3066993
    }
    if (args === "blue") {
      return 3447003
    }
    if (args === "purple") {
      return 10181046
    }
    if (args === "orange") {
      return 15105570
    }
    if (args === "red") {
      return 15158332
    }
    if (args === "yellow") {
      return 16776960
    }
    if (args === "random") {
      var datawarna = [3066993,10181046, 3447003, 15105570, 15158332, 16776960]
      return datawarna[Math.floor(Math.random() * datawarna.length)];
    }
  }
  if (args.startsWith("#")) {
    var bbggrr = rrggbb.substr(4, 2) + rrggbb.substr(2, 2) + rrggbb.substr(0, 2);
    return parseInt(bbggrr, 16);
  }
}

module.exports = {
  CommandOptionType:CommandOptionType(),
  CommandPermissionType:CommandPermissionType(),
  CommandType:CommandType(),
  ButtonStyle:ButtonStyle(),
  TextInputStyle:TextInputStyle(),
  ResolveColor:ResolveColot()
}
